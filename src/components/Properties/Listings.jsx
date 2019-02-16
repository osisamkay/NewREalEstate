import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar';
import Footer from '../Footer';
import styled from 'styled-components';
import axios from 'axios';
import Loader from '../../../assets/loader.gif';
import ListCard from './ListCard';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Pagination from "react-js-pagination";

const List = styled.div`
  .header img{
    object-fit:cover;
  }
  h2{
    text-align:center;
    color:var(--color-brand-1);
    margin:0px;
    padding:60px 0;
    font-size:47px;
    @media (min-width:768px){
      font-size:68px;
    }
  }
  form{
    background:#27446E;
    width:90%;
    margin:0px auto;
    color:white;
    padding:60px 20px;
    box-shadow:0 3px 6px black;
    label,input,select{
      display: block;
    }
    input,select{
      width: 100%;
      padding: 12px;
      border-radius: 5px;
      outline: none;
      color: #8a758a;
      height:50px;
    }
    label{
      padding:20px 0px;
    }

    .input{
      padding-bottom:20px;
    }

    .range2{
      h5{
        display:inline;
        margin:0px;
        @media(min-width:1440px){
            font-size: 11px;
        }
      }
      @media(min-width:768px){
        input#typeinp {
          width: 77%;
          display: inline;
        }
      }
      @media(min-width:1440px){
        input#typeinp {
          width: 59%;
        }
      }
    }
    @media (min-width:768px){
      .formgroup{
        display:grid;
        grid-template-columns:repeat(2,1fr);
        grid-gap:10px;
      }
    }
  }
  
  @media(min-width:1440px){
    .mobile{
      display:none;
    }
  }
`;
const ListRight = styled.div`
  @media(min-width:0px){
    display:none;
  }
  @media(min-width:1440px){
    display:block;
  }
`;
const ListLeft = styled.div`
.loader-text{
  text-align: center;
}
.loader-img {
  text-align: center;
  img{
    width:50%;
  }
}
  .left{
    width:90%;
    margin:0px auto;
    .child1{
      display:inline;
      h4{
        float:left;
        margin:0px;
        font-size:17px;
        @media (min-width:375px){
          font-size:22px;
        }
      }
      
      button{
        float: right;
        padding: 10px;
        border: none;
        width: 65px;
        border-radius: 5px;
        background-color: #314b73;
        color:white;
        cursor:pointer
      }
      
      &::after{
        content:'';
        clear:both;
        display:block;
      }
  
    }
    @media(min-width:768px){
      display:grid;
      grid-template-columns:1fr 1fr;
      grid-gap:25px;
    }
  }
`;

const GridStyle = styled.div`
@media (min-width:1440px){
  display:grid;
  grid-template-columns:3fr 1fr;
}
 
`;

class Listing extends Component {

  constructor() {
    super();
    this.state = {
      lists: [],
      ready: 'initial',
      search: "",
      activePage: 1
    };
  }
  componentDidMount() {
    this.setState({
      ready: 'loading',
    });
    axios({
      method: 'get',
      url: `https://api.airtable.com/v0/apprAJrG1euRf2tmF/Listings`,
      headers: { Authorization: `Bearer keyRMRWZ0xrBXA8Yv` },

    }).then(({ data: { records } }) => {
      console.log(records);
      this.setState({
        ready: 'loaded',
        lists: records,
      })
    })
  }
  locationChange(e) {
    this.setState({
      search: e.target.value
    })
  }
  PropertyChange(e) {
    this.setState({
      search: e.target.value
    })
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }

  render() {
    const { lists, ready, search } = this.state;
    const filtered = lists.filter(list => {
      return list.fields.Name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

  //  var filtered = lists.filter(list => {
  //     return list.fields.Bedrooms.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  //   });


    return (
      <div>
        <Navbar />
        <List>
          <div className="header">
            <img src={require('../../../assets/pexels-photo-356830.jpeg')} alt="pic" />
            <h2>Our Properties</h2>
          </div>
          <div className="mobile">
            <form>
              <div className="formgroup">
                <div className="location input">
                  <label htmlFor="Location">Location:</label>
                  <input type="search" name="Location" placeholder='Location' onChange={this.locationChange.bind(this)} />
                </div>
                <div className="Category input">
                  <label htmlFor="category">Category:</label>
                  <select name="category" className="app-select" required >
                    <option data-display="Property Type">Property Type</option>
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
                <div className="bedrooms input">
                  <label htmlFor="bedroom">Bedrooms</label>
                  <select name="bedroom" className="app-select" required onChange={this.locationChange.bind(this)}>
                    <option data-display="Bedrooms">Bedrooms</option>
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedroom</option>
                    <option value="3">3 Bedroom</option>
                    <option value="4">4 Bedroom</option>
                    <option value="5">5 Bedroom</option>
                  </select>
                </div>
                <div className="AreaRange input">
                  <label htmlFor="area">Area Sqft</label>
                  <input type="text" id="range2" name="area" placeholder='Area Range' />
                </div>
              </div>
              <div className="range2 filter">
                <h5>₦100,000</h5>
                <input id="typeinp" type="range" min="0" max="100,000,000" value={this.state.values} step="1" />
                <h5>₦100,000,000</h5>
              </div>
            </form>
          </div>
          <div className="listgroup">
            <GridStyle>
              <ListLeft>
                <div className="loader">
                  {lists.length ? '' : (<h3 className='loader-text'>There are no list items</h3>)}
                  {ready === 'loading' ? (<div className='loader-img'><img src={Loader} className='Image' alt="loader" /></div>) : ''}
                </div>
                <div className="left">
                  {filtered.map(list => (
                    <div key={list.id}>
                      <Link to={`/Listview/${list.id}`}>
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
                      </Link>
                    </div>
                  ))}
                  <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={6}
                    totalItemsCount={24}
                    pageRangeDisplayed={24}
                    onChange={this.handlePageChange.bind(this)}
                  />
                </div>
              </ListLeft>
              <ListRight>
                <div className="listright">
                  <form>
                    <div className="location input">
                      <label htmlFor="Location">Location:</label>
                      <input type="search" name="Location" placeholder='Location' onChange={this.locationChange.bind(this)} />
                    </div>
                    <div className="Category input">
                      <label htmlFor="category">Category:</label>
                      <select name="category" className="app-select" required >
                        <option data-display="Property Type">Property Type</option>
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
                    <div className="bedrooms input">
                      <label htmlFor="bedroom">Bedrooms</label>
                      <select name="bedroom" className="app-select" required onChange={this.PropertyChange.bind(this)}>
                        <option data-display="Bedrooms">Bedrooms</option>
                        <option value="1">1 Bedroom</option>
                        <option value="2">2 Bedroom</option>
                        <option value="3">3 Bedroom</option>
                        <option value="4">4 Bedroom</option>
                        <option value="5">5 Bedroom</option>
                      </select>
                    </div>
                    <div className="AreaRange input">
                      <label htmlFor="area">Area Sqft</label>
                      <input type="text" id="range2" name="area" placeholder='Area Range' />
                    </div>
                    <div className="range2 filter">
                      <h5>₦100,000</h5>
                      <input id="typeinp" type="range" min="0" max="100,000,000" value={this.state.values} step="1" />
                      <h5>₦100,000,000</h5>
                    </div>
                  </form>
                </div>
              </ListRight>
            </GridStyle>
          </div>
        </List>
        <Footer />
      </div>
    )
  }
}
export default Listing;
