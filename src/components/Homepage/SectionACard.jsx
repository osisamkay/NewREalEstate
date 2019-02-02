import React, { Component } from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
  .stylegroup{
    display:grid;
    grid-template-columns:repeat(5,1fr);
  }
  @media(min-width:1024px){
      width:82%;
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
    };
  }
  handleValuesChange(event) {
    this.setState({
      value: event.target.value
    });
  }
  render() {
    const{value} = this.state
    return (
      <CardStyle>
      <div className="stylegroup">
        <div className="Location filter">
          <select name="Location-type" className="app-select" required>
            <option data-display="Location Type">Location</option>
            <option value="1">Location  1</option>
            <option value="2">Location  2</option>
            <option value="3">Location  3</option>
          </select>
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
          <input type="button" value="Search" />
        </div>
      </div>
      <div className="range2 filter">
        <h5>₦100,000</h5>
        <input id="typeinp" type="range" min="0" max="100,000,000"  value={this.state.values} 
        onChange={this.handleValuesChange.bind(this)} step="1" />
        <h5>₦100,000,000</h5>
      </div>
    </CardStyle>
    )
  }
}
