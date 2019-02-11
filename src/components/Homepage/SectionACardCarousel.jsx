import React, { Component } from "react";
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

const CarouselCard = styled.div`
  display:grid;
  grid-template-columns:2fr 1fr;
  width:575px;
  .left{
    background-color:white;
    padding:20px;
    color: #314B73;
    h1{
      margin:0px;
    }
    h2{
        
      font-size:30px;
    }
    h5{
      display:inline-block;
      font-size:25px;
      font-weight: lighter;
      margin:0px;
      padding-bottom:20px;
      span{
        display:inline-block;
        img{
          width:16px;
          display:inline-block;
        }

      }
      
      &:after{
        position: absolute;
        top: 63px;
        bottom: 94px;
        left: 4%;
        right: 72%;
        content: "";
        border-bottom: 4px solid black;
      }
    }
    
  
  }
  .right{
    background-color:rgba(5,39,88,0.6);
    ul{
      padding:20px;
      margin:0px;
      li{
        color:white;
        padding-bottom:20px;
        span{
          padding-right:10px;
          img{
            width:20px;
            display:inline-block;
          }
        }
      }
      
    }
  }
  
`;

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
      fade: true,
      arrows:false,
      cssEase: "linear"
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <CarouselCard>
              <div className="left">
                <h1>10 Room Mansion</h1>
                <div className="street">
                  <h5>
                    <span><img src={require('../../../assets/Path 30.png')} alt="location" /></span>
                    22, Surulere Drive
                </h5>
                </div>
                <h2>₦ 45,000,000.00</h2>
              </div>
              <div className="right">
                <ul>
                  <li><span><img src={require('../../../assets/wbed.png')} alt="bed" /></span>Bedrooms (10)</li>
                  <li><span><img src={require('../../../assets/wbath.png')} alt="bed" /></span>Bathrooms (10)</li>
                  <li><span><img src={require('../../../assets/cooker.png')} alt="bed" /></span>Kitchen (6)</li>
                  <li><span><img src={require('../../../assets/wbed.png')} alt="bed" /></span>Garage (3)</li>
                </ul>
              </div>
            </CarouselCard>
          </div>
          <div>
            <CarouselCard>
              <div className="left">
                <h1>10 Room Mansion</h1>
                <div className="street">
                  <h5>
                    <span><img src={require('../../../assets/Path 30.png')} alt="" /></span>
                    12, Queens Drive, Ikoyi
                </h5>
                </div>
                <h2>₦ 450,000,000.00</h2>
              </div>
              <div className="right">
                <ul>
                  <li><span><img src={require('../../../assets/wbed.png')} alt="bed" /></span>Bedrooms (10)</li>
                  <li><span><img src={require('../../../assets/wbath.png')} alt="bed" /></span>Bathrooms (10)</li>
                  <li><span><img src={require('../../../assets/cooker.png')} alt="bed" /></span>Kitchen (6)</li>
                  <li><span><img src={require('../../../assets/wbed.png')} alt="bed" /></span>Garage (3)</li>
                </ul>
              </div>
            </CarouselCard>
          </div>
          <div>
            <CarouselCard>
              <div className="left">
                <h1>10 Room Mansion</h1>
                <div className="street">
                  <h5>
                    <span><img src={require('../../../assets/Path 30.png')} alt="" /></span>
                    8, Atunrase Estate, Gbagada
                </h5>
                </div>
                <h2>₦ 35,000,000.00</h2>
              </div>
              <div className="right">
                <ul>
                  <li><span><img src={require('../../../assets/wbed.png')} alt="bed" /></span>Bedrooms (10)</li>
                  <li><span><img src={require('../../../assets/wbath.png')} alt="bed" /></span>Bathrooms (10)</li>
                  <li><span><img src={require('../../../assets/cooker.png')} alt="bed" /></span>Kitchen (6)</li>
                  <li><span><img src={require('../../../assets/wbed.png')} alt="bed" /></span>Garage (3)</li>
                </ul>
              </div>
            </CarouselCard>
          </div>
        </Slider>
      </div>
    );
  }
}
