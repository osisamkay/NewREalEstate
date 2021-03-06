import React, { Component, Suspense } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import ListCard from './../Properties/ListCard';
import Modal from 'react-responsive-modal';
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";
import './modal.css';

const CardStyle = styled.form`
  .stylegroup{
    display:grid;
    grid-template-columns:repeat(5,1fr);
    margin-bottom: 20px;
  }
  @media(min-width:1024px){
      width:81%;
      margin:0px auto;
  }
  background-color:rgba(42, 58, 73,.93);
  padding: 25px;
  .filter{
    display:inline-block;
    padding-left:20px;
    select{
      height: 45px;
      padding: 12px;
      border-radius: 5px;
    }
    input[type="search"]{
      height: 45px;
      padding: 12px;
      border-radius: 5px;
      width:100%;
    }
  }

  .range1{
    display:none;
  }

  input#typeinp {
    width: 65%;
    @media(min-width:1024px){
      width:456px;
    }
}

  .range2{
    display:block;
    padding-top: 20px;
    width: 60%;
    margin: 0px auto;
    padding:20px 0px;
      .input-range__track--active ,.input-range__slider {
        background: #d28662;
        border-color: #d28662;
    }
  }
    h5{
      margin: 0px;
      display: inline-block;
      color: #D28662;
      padding: 10px;
      font-size: 15px;
    }
  }
  input[type="submit"] {
    border: none;
    border-radius: 5px;
    padding: 11px;
    width: 100%;
    color: white;
    background: #D28662;
    font-weight: 600;
    font-size: 20px;
    cursor:pointer;
  }
  .app-select{
    width:100%;
  }

`;





export default class SectionACard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 5000000,
      search: " ",
      lists: [],
      open: false,
    };
  }
  LocationChange = (e) => {
    this.setState({
      search: e.target.value
    })
  };

  onOpenModal = (e) => {
    e.preventDefault();
    this.setState({ open: true });
  };
  onCloseModal = () => {
    this.setState({ open: false });
  };


  componentDidMount() {

    axios({
      method: 'get',
      url: `https://api.airtable.com/v0/apprAJrG1euRf2tmF/Listings`,
      headers: { Authorization: `Bearer keyRMRWZ0xrBXA8Yv` },

    }).then(({ data: { records } }) => {
      ;
      this.setState({
        ready: 'loaded',
        lists: records,
      })
    })
  }
  render() {
    const { lists, search, open } = this.state;
    const filtered = lists.filter(list => {
      return list.fields.Name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        list.fields.Bedrooms.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        list.fields.Tag.toLowerCase().indexOf(search.toLowerCase()) !== -1
    });
    return (
      <div>
        <CardStyle onSubmit={this.onOpenModal} >
          <div className="stylegroup">
            <div className="Location filter">
              <input type="search" name="Location" required placeholder='Location' onChange={this.LocationChange} />
            </div>
            <div className="Category filter">
              <select name="Category-type" className="app-select" >
                <option data-display="Location Type">Category</option>
                <option value="1">Modern Townhouse</option>
                <option value="2">terraced duplex</option>
                <option value="3">Urban Townhouse</option>
                <option value="4">Downtown Condo</option>
                <option value="5">Beach House</option>
                <option value="6"> Duplex</option>
                <option value="7"> Flats</option>
                <option value="8"> Mall</option>
                <option value="9"> Office</option>
              </select>
            </div>
            <div className="Bedrooms filter">
              <select name="Bedrooms-type" className="app-select" onChange={this.LocationChange} >
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedroom</option>
                <option value="3">3 Bedroom</option>
                <option value="4">4 Bedroom</option>
                <option value="5">5 Bedroom</option>
              </select>
            </div>
            <div className="AreaRange filter">
              <select name="Location-type" className="app-select">
                <option data-display="Area Range">Area Range</option>
                <option value="1">Area Range 1</option>
                <option value="2">Area Range  2</option>
                <option value="3">Area Range  3</option>
              </select>
            </div>
            <div className="range1 filter">
              <h3>₦100,000</h3>
              <input id="typeinp" type="range" min="0" max="100,000,000" defaultValue="3" step="1" />
              <h3>100,000,000</h3>
            </div>
            <div className="search filter">
              <input type="submit" value="Search" />
            </div>
          </div>
          <div className="range2 filter">
            <InputRange
              maxValue={100000000}
              minValue={100000}
              enable
              formatLabel={value => `₦ ${value} `}
              value={this.state.value}
              onChange={value => this.setState({ value: value })}
              onChangeComplete={value => console.log(value)} />
          </div>
        </CardStyle>
        <Modal open={open} onClose={this.onCloseModal} center>
          <div className="loader">
            {filtered.length   ? " " : (<h3 className='loader-text'>Not Available</h3>)}
          </div>
          <div className="modals">
            {filtered.map(list => (
              <div key={list.id}>
                <Link to={`/Listview/${list.id}`}>
                  <Suspense fallback={<div>Loading...</div>}>
                    <ListCard
                      image={list.fields.icon ? list.fields.icon[0].url : ''}
                      Price={list.fields.Asking}
                      location={list.fields.Name}
                      bath={list.fields.Bathrooms}
                      bed={list.fields.Bedrooms}
                      area={list.fields.Area} >
                      <div className="child1">
                        <h4>{list.fields.Tag}</h4>
                        <div className='button'><button>View</button></div>
                      </div>
                    </ListCard>
                  </Suspense>
                </Link>
              </div>
            ))}
          </div>
        </Modal>
      </div>
    )
  }
}
