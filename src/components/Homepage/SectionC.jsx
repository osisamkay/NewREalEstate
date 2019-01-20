import React from 'react';
import styled from 'styled-components';
import SectD from '../../../assets/sidekix-media-1129785-unsplash (1).png';


const SectionCStyle = styled.div`
  padding:0px;
  h1{
    padding: 59px 2PX;
    font-size: 40px;
    color:var(--color-brand-1);
    text-align:center;

  }
`;

const SectionCStyleGroup = styled.div`
  padding:15px;
  .left{
    color:var(--color-brand-1);
    text-align:center;
    width:90%;
    margin:0px auto;
    h2{
      padding-top:30px;
      margin:0px;
    }
    p{
      font-size: 15.5px;
      padding: 15px 0;
      width: 90%;
      margin: 0px auto;
    }
    .button{
      @media (min-width:768px){
        text-align:left;
      }

      padding-bottom:10px;
      button{
        color:white;
        width:109px;
        background-color:#27446E;
        padding: 5px;
        border-radius: 5px;
        border: none;
        box-shadow: 0 3px 6px black;
    }
    
    
      }
    }
  } 
  @media (min-width:768px){
    display:grid;
    grid-template-columns:1fr 3fr;
    align-items:center;
    .left{
      padding:auto 0;
    .leftcontent{
      width:300px;
      text-align:left;
      padding:auto 0px;
    }
      p{
        width: 78%;
        margin:0px;
        padding:10px 0;
        line-height: 25px;
      }
    } 

  } 
   
  @media (min-width:1024px){
    width:75%;
    margin:0px auto;
  }
  @media (min-width:1440px){

  }

`;


const SectionC = () => (
  <SectionCStyle>
    <h1> WHY WE ARE THE BEST</h1>
    <SectionCStyleGroup>
    <div className="left">
      <div className="leftcontent">
        <h2>BUYING OR SELLING MADE SIMPLE</h2>
        <p>Find every home in  the market, get your home's value, book inspection and even make offers all here on our website.</p>
      </div>
      <div className="button">
        <button>Learn More</button>
      </div>
    </div>
    <div className="right">
      <img src={SectD} alt="section B" />
    </div>
    </SectionCStyleGroup>
  </SectionCStyle>
  

)

export default SectionC;
