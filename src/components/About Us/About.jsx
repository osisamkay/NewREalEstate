import React from 'react';
import styled from 'styled-components';
import Navbar from './../navbar';
import Footer from './../Footer';

const AboutStyle = styled.div`

`;
const AboutGroup = styled.div`
  .header{
    background-color:#ffffff;
    text-align:center;
    padding:120px 10px;
  }
  .detail{
    background-color:rgba(112, 112, 112,.5);
    .what p{
      @media(min-width:1024px){
        width:500px;
      }
    }
  }
  .details {
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-items: center;

    h5{
      text-align:center;
    }
    p{
      text-align:left;
      font-family: Tahoma;
      padding: 21px;
      margin: 0px;
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
    
    .pupimages{
      padding-bottom:20px;
      @media(min-width:1024px){
        padding: 0px 129px;
      }
      padding-bottom:20px;
      @media(min-width:1440px){
        padding: 0px 334px;
      }
      .span{
        background-color:#404040;
        padding:17px;
        margin:0px auto;
        h4,p{
          color:#ffffff;
          margin:0px;
          text-align:center;
        }
        @media (min-width:768px){
          width: 279px;
          opacity:0.8;
          position:relative;
          top: -97px;
          right: 30.6%;
          
        }
      }
      
    }
    
  }
`;

const AboutUs = () => (
  <AboutStyle>
    <Navbar />
    <AboutGroup>
      <div className="header">
        <h1>"Over 2.5 million properties sold,more are being sold everyday."</h1>
      </div>
      <div className="detail">
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

        <div className="details">
          <h5>Address</h5>
          <p>15th Floor, Elephant House, Marina, Lagos, Nigeria.</p>
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
        <div className="pupimages">
          <img src={require('../../../assets/david-travis-548920-unsplash.jpg')} alt="team" />
          <span>
            <div className="span">
              <h4>Vision</h4>
              <p>To be the best home providers globally</p>
            </div>
          </span>
        </div>
        <div className="pupimages">
          <img src={require('../../../assets/bobby-rodriguezz-786110-unsplash.jpg')} alt="team" />
          <span>
            <div className="span">
              <h4>Determination</h4>
              <p>Going beyond boundaries to meet our clients expectations and needs</p>
            </div>
          </span>
        </div>
        <div className="pupimages">
          <img src={require('../../../assets/jakob-owens-729729-unsplash.jpg')} alt="team" />
          <span>
            <div className="span">
              <h4>Reliability</h4>
              <p>Providing honest and trusted services to our clients</p>
            </div>
          </span>
        </div>
      </div>
    </AboutGroup>
    <Footer />
  </AboutStyle>

);

export default (AboutUs); 
