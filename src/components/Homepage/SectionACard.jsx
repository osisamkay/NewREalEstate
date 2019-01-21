import React from 'react';
import styled from 'styled-components';


const CardStyle = styled.div`


`;

const SectionACard = ()=>(

  <CardStyle>
    <div className="stylegroup">
      <div className="Location">
        <select name="Location-type" className="app-select" required>
          <option data-display="Location Type">Location Type</option>
          <option value="1">Location  1</option>
          <option value="2">Location  2</option>
          <option value="3">Location  3</option>
        </select>
      </div>
      <div className="Category">
        <select name="Category-type" className="app-select" required>
          <option data-display="Location Type">Category Type</option>
          <option value="1">Category  1</option>
          <option value="2">Category  2</option>
          <option value="3">Category  3</option>
        </select>
      </div>
      <div className="Bedrooms">
        <select name="Bedrooms-type" className="app-select" required>
          <option data-display="Bedrooms Type">Bedroom Type</option>
          <option value="1">Bedrooms  1</option>
          <option value="2">Bedrooms  2</option>
          <option value="3">Bedrooms  3</option>
        </select>
      </div>
      <div className="AreaRange">
        <select name="Location-type" className="app-select" required>
          <option data-display="Area Range">Area Range</option>
          <option value="1">Area Range 1</option>
          <option value="2">Area Range  2</option>
          <option value="3">Area Range  3</option>
        </select>
      </div>
    </div>
  </CardStyle>


) 

export default SectionACard;
