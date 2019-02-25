import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import styled from 'styled-components';
import axios from 'axios';

const CardStyle = styled.form`
  .stylegroup{
    display:grid;
    grid-template-columns:repeat(5,1fr);
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
    select, input{
      height: 45px;
      padding: 12px;
      border-radius: 5px;
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
  }
    h5{
      margin: 0px;
      display: inline-block;
      color: #D28662;
      padding: 10px;
      font-size: 15px;
    }
  }
  input[type="button"] {
    border: none;
    border-radius: 5px;
    padding: 11px;
    width: 100%;
    color: white;
    background: #D28662;
    font-weight: 600;
    font-size: 20px;
  }
  .app-select{
    width:100%;
  }

`;




export default class SectionACard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: { min: 0, max: 100000000 },
      search:" ",
      lists: [],
    };
  }
  LocationChange=(e)=>{
    this.setState({
      search: e.target.value
    })
  };
  
  
  submit(event) {
    event.preventDefault();
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
    const {lists, search} = this.state;
   const filtered = lists.filter(list => {
      return list.fields.Name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        list.fields.Bedrooms.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        list.fields.Tag.toLowerCase().indexOf(search.toLowerCase()) !== -1
    });
    return (
      <div>
      <CardStyle onSubmit={this.submit.bind(this)}>
        <div className="stylegroup">
          <div className="Location filter">
          <input type="search" name="Location" placeholder='Location' onChange={this.LocationChange}  />
          </div>
          <div className="Category filter">
            <select name="Category-type" className="app-select" required>
              <option data-display="Location Type">Category</option>
              <option value="1">Category  1</option>
              <option value="2">Category  2</option>
              <option value="3">Category  3</option>
            </select>
          </div>
          <div className="Bedrooms filter">
            <select name="Bedrooms-type" className="app-select" required>
              <option data-display="Bedrooms Type">Bedroom</option>
              <option value="1">Bedrooms  1</option>
              <option value="2">Bedrooms  2</option>
              <option value="3">Bedrooms  3</option>
            </select>
          </div>
          <div className="AreaRange filter">
            <select name="Location-type" className="app-select" required>
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
          <h5>₦100,000</h5>
          <input id="typeinp" type="range" min="0" max="100,000,000" value={this.state.values} step="1" />
          <h5>₦100,000,000</h5>
        </div>
      </CardStyle>
      {filtered.length > 0 &&
          <Redirect to={{
            pathname: '/Result',
            state: { results: filtered }
          }}/>
        }
      </div>
    )
  }
}
