import React from 'react';
import styled from 'styled-components';
import Location from '../../../assets/Path 30.png';
import Bath from '../../../assets/bathtub-with-opened-shower.png';
import Bed from '../../../assets/bed.png';
import Area from '../../../assets/width (1).png';


const Cards = styled.div`
  text-align: center;
  background-color:#ffffff;
  box-shadow:0px 3px 6px #000000;
  margin:20px 0px;
  height: 535px;
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
      width:50%;
      position:relative;
      top:-100px;
      h4{
        padding: 15px;
        color: white;
        font-size: 25px;
        text-align:left;
        margin-left:1px;
      }
    }
  }
  
  .details{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    align-items: center;
    justify-items:left;
    padding:0px 15px;
    position: relative;
    top: -102px;
    grid-gap: 10px;

    img{
      width:17px;
    }
    h6{
      position: relative;
      top: -3px;
      color:#404040;
      margin:0px;
      opacity:.62;
      display:inline;
      font-size:13px;
      margin-left:5px;
      @media (min-width:1024px){
        font-size:17px;
      }
    }
    .bath,.bed{
      margin-left:auto;
    }
    .dets{
      padding:17px 0px;
    }
  }
`;


const ListCard = ({children,location,image,Price,bath,area,bed}) =>(
  <Cards>
    <div className='children'>
      {children}
    </div>
    <div className='images'>
      <img src={image || 'http://placehold.it/200'} alt="sectionE cards"/>
      <div className="price">
        <h4>{Price}</h4>
      </div>
    </div>
    <div className='details'>
      <div className="location dets">
        <img src={Location} alt="sectionE cards"/>
        <h6>{location}</h6>
      </div>
      <div className="bath dets">
        <img src={Bath} alt="bath"/>
        <h6>{bath}</h6>
      </div>
      <div className="area dets">
        <img src={Area} alt="area"/>
        <h6>{area}</h6>
      </div>
      <div className="bed dets">
        <img src={Bed} alt="bed"/>
        <h6>{bed}</h6>
      </div>

    </div>
  </Cards>

);

export default ListCard ;
