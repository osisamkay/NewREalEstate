import React from 'react';
import styled from 'styled-components';
import Navbar from './../navbar';
import Footer from './../Footer';
import Vision from '../../../assets/pexels-photo-712786.jpg';
import Determination from '../../../assets/pexels-photo-263731.jpg';
import Reliability from '../../../assets/pexels-photo-1261731.jpg';

const AboutStyle = styled.div`

`;
const AboutGroup = styled.div`
  .header{
    background-color:#ffffff;
    text-align:center;
    padding:120px 20px;
    h1{
      font-size:25px;
      @media(min-width:768px){
        font-size:50px;
      }
    }
  }
  .detail{
    background-color:rgba(112, 112, 112,.5);
    .what p{
      @media(min-width:1024px){
        width:500px;
      }
    }
  }
  .detailGroup {
    width: 90%;
    margin: 0px auto;
    @media(min-width:1024px){
      width:75%;
      padding:30px 0px;
    }
  }
  .details {
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-items: left;

    h5{
      text-align:center;
    }
    p{
      text-align:left;
      font-family: Tahoma;
      padding: 21px;
      margin: 0px;
    }
    @media(min-width:1024px){
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items:center;
      h5,p{
        font-size:25px;
      }
    }
  }
  h2{
    text-align:center;
    margin-bottom: 60px;
  }
  .Team{
    padding:120px 0;
    background-color:white;
  }

  .teams{
    @media (min-width:768px){
      display:grid;
      grid-template-columns:repeat(2,1fr);
      padding:20px;
    }
    @media(min-width:1024px){
      display:grid;
      grid-template-columns:repeat(4,1fr);
    }
  }
  .teamdetails{
    text-align:center;
    padding-bottom:20px;
    img{
      width:50%;
    }
    h5,h6{
      margin:0px;
    }
  }

  .purpose{
    background-color:#ffffff;
    padding:20px;
    .first {
      background-image: url(${Vision});
    }
    .second {
      background-image: url(${Determination});
      
    }
    .third {
      background-image: url(${Reliability});
    }
    .pupimages{
      height:85px;
      background-size: cover;
      background-repeat: no-repeat;
      margin-bottom:30px;
      display:grid;
      .span{
        background-color:rgba(64,64,64,.6);
        width:50%;
        margin:auto 0px;
        h4,p{
          color:#ffffff;
          font-size:12px;
          margin:0px;
          text-align:center;
        }
      }
      .spanLeft{
        margin-left:auto;
      }
      @media (min-width:768px){
        height:220px;
        .span{
          width: 36%;
          padding: 20PX;
          h4{
            font-size:32px;
          }
          p{
            font-size:16px;
          }
        }
      }
    }
    
    @media (min-width:1024px){
      width:1000px;
      margin:0px auto;
      .pupimages{
        height:325px;
        .span{
          width:25%;
        }
      }
    }
    @media (min-width:1440px){
      width:1200px;
    }
    
  }
`;

const AboutUs = () => (
  <AboutStyle>
    <Navbar />
    <div className="imageHead">
      <img src={require('../../../assets/pexels-photo-417382.jpeg')} alt="pic" />
    </div>
    <AboutGroup>
      <div className="header">
        <h1>"Over 2.5 million properties sold,more are being sold everyday."</h1>
      </div>
      <div className="detail">
        <div className="detailGroup">
          <div className="details">
            <h5>Founded</h5>
            <p>1996</p>
          </div>
          <div className="details">
            <h5>Ownership</h5>
            <p>Premium Properties</p>
          </div>
          <div className="details">
            <h5>Global Headquaters</h5>
            <p>Lagos, Nigeria</p>
          </div>

          <div className="details what">
            <h5>What We Do</h5>
            <p>
              Premium properties is a leading global business
               enterprise in the Real Estate Market.We manage
                homes,buy homes, and sell homes across
                Nigeria and Africa.
          </p>
          </div>

          <div className="details">
            <h5>Address</h5>
            <p>15th Floor, Elephant House, Marina, Lagos, Nigeria.</p>
          </div>
        </div>
      </div>
      <div className="Team">
        <h2>Meet Our Team</h2>
        <div className="teams">
          <div className="teamdetails">
            <img src={require('../../../assets/Olukayode.png')} alt="team" />
            <h5>Olukayode Osisami</h5>
            <h6>C.E.O</h6>
          </div>
          <div className="teamdetails">
            <img src={require('../../../assets/funsho.png')} alt="team" />
            <h5>Funsho Fatoye</h5>
            <h6>Commercial Director</h6>
          </div>
          <div className="teamdetails">
            <img src={require('../../../assets/Oluwaseyi.png')} alt="team" />
            <h5>Oluwaseyi Abiodun</h5>
            <h6>Financial Director</h6>
          </div>
          <div className="teamdetails">
            <img src={require('../../../assets/IMG_2593.png')} alt="TEAM" />
            <h5>Chukwunonso Obidike</h5>
            <h6>Director Administrations</h6>
          </div>
        </div>
      </div>

      <div className="purpose">
        <h2>Our Purpose And Beliefs </h2>
        <div className="pupimages first">
          <div className="span">
            <h4>Vision</h4>
            <p>To be the best home providers globally</p>
          </div>
        </div>
        <div className="pupimages second">
          <div className="span spanLeft">
            <h4>Determination</h4>
            <p>Going beyond boundaries to meet our clients expectations and needs</p>
          </div>
        </div>
        <div className="pupimages third">
          <div className="span">
            <h4>Reliability</h4>
            <p>Providing honest and trusted services to our clients</p>
          </div>
        </div>
      </div>
    </AboutGroup>
    <Footer />
  </AboutStyle>

);

export default (AboutUs); 
