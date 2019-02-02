import React from 'react';
import styled from 'styled-components';
import Location from '../../../assets/Path 30.png';
import Bath from '../../../assets/bathtub-with-opened-shower.png';
import Bed from '../../../assets/bed.png';
import Area from '../../../assets/width (1).png';


const Cards = styled.div`
  width:90%;
  height:487px;
  margin: 15px auto;
  text-align: center;
  background-color:#ffffff;
  box-shadow:0px 3px 6px #000000;
  img{
    width:100%;
  }
  .children{
    color:#28456F;
    font-size:22px;
    text-align:left;
    padding: 15px;
    margin: 0px;
}
  }
  .images{
    img{
      height:300px;
      object-fit:cover;
    }
    .price{
      background-color:#27446E;
      width:65%;
      position:relative;
      top:-90px;
      h4{
        padding:10px;
        color:white;
        font-size:25px;
        text-align: left;
      }
    }
  }
  
  .details{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    align-items: center;
    justify-items: left;
    position: relative;
    top: -85px;
    grid-gap: 10px;
    width: 90%;
    margin: 0px auto;
    

    .bath,.bed{
      margin-left:auto;
    }

    img{
      width:17px;
    }
    span{
      position: relative;
      top: -3px;
      padding: 4px;
      width:100px;
      font-weight: 600;
      font-size:17px;
    }
  }
`;


const SectionBCards = ({children,location,image,Price,bath,area,bed}) =>(
  <Cards>
    <div className='children'>
      {children}
    </div>
    <div className='images'>
      <img src={image || 'http://placehold.it/200'} alt="sectionE cards"/>
      <div className="price">
        <h4>₦{Price}</h4>
      </div>
    </div>
    <div className='details'>
      <div className="location det">
        <img src={Location} alt="sectionE cards"/>
        <span>{location}</span>
      </div>
      <div className="bath det">
        <img src={Bath} alt="bath"/>
        <span>{bath}</span>
      </div>
      <div className="area det">
        <img src={Area} alt="area"/>
        <span>{area}</span>
      </div>
      <div className="bed det">
        <img src={Bed} alt="bed"/>
        <span>{bed}</span>
      </div>
      

    </div>
  </Cards>

);

export default SectionBCards ;
