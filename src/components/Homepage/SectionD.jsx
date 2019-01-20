import React from 'react';
import styled from 'styled-components';
import SectD from '../../../assets/new-data-services-746321-unsplash.png';
import SectD2 from '../../../assets/ihor-dvoretskyi-719187-unsplash.png';


const SectionDStyle = styled.div`
  padding:100px 0;
  @media (min-width:1024px){
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-gap:10px;
    align-items:center;
    width:90%;
    margin:0px auto;
    h2{
      margin:0px
    }
    .left img{
      width: 100%;
    }
  }
  @media (min-width:1440px){
    grid-gap:30px;
  }
`;
  

const SectionDStyleGroup1 = styled.div`
  box-shadow:0 3px 6px #000000;
  .left{
    text-align:center;

    img{
      width:60%;
      @media (min-width:1024px){
        width:102%;
      }
    }
  }

  .right{
    width:90%;
    margin:0px auto;

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
  @media (min-width:768px){
    display:grid;
    grid-template-columns:1fr 2fr;
    align-items: center;
  }
`;
const SectionDStyleGroup2 = styled.div`
box-shadow:0 3px 6px #000000;
.left{
  text-align:center;

  img{
    width:60%;
    @media (min-width:1024px){
      width:100%;
    }
  }
}

.right{
  width:90%;
  margin:0px auto;

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
@media (min-width:768px){
  display:grid;
  grid-template-columns:1fr 2fr;
  align-items: center;
}
@media (min-width:1024px){
  padding:0px;
}
`;




const SectionD = () => (
  <SectionDStyle>
    <SectionDStyleGroup1>
    <div className="left">
      <img src={SectD} alt="section B" />
    </div>
    <div className="right">
      <div className="leftcontent">
        <h2>TRACK THE ENTIRE PROCESS</h2>
        <p>Stay in the loop with weekly updates and 24/7 access to timeline of all the details of your transaction and all your moves.</p>
      </div>
      <div className="button">
        <button>Learn More</button>
      </div>
    </div>
    </SectionDStyleGroup1>

    <SectionDStyleGroup2>
      <div className="left">
        <img src={SectD2} alt="section B" />
      </div>
      <div className="right">
        <div className="leftcontent">
          <h2>YOUR VERY OWN CONCIERGE</h2>
          <p>Buy, sell or rent with us and get a moving concierge to coordinate everything from changing over your utilities to finding movers.</p>
        </div>
        <div className="button">
          <button>Learn More</button>
        </div>
      </div>
    </SectionDStyleGroup2>
  </SectionDStyle>


)

export default SectionD;
