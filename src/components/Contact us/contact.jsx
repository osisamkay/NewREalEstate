import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from './../navbar';
import Footer from './../Footer';


const ContactStyle =styled.div`
  background-color:#283949;
`;

const ContactStyleGroup =styled.div`
  padding:20px;
  border-bottom: 2px solid #dadadb;;
  @media (min-width:768px){
    padding: 77px 29px;
  }
  @media (min-width:1024px){
    padding: 77px 100px;
  }
  @media (min-width:1440px){
    padding: 100px 230px;
  }
  .wrapper{
    background-color:#ffffff;
    border-radius: 5px;
    @media (min-width:768px){
      display:grid;
      grid-template-columns:1fr 2fr;
    }
  }

  h3 {
    text-align: center;
    @media (min-width:768px){
      text-align: left;
      padding-left: 23px;
    }
  }

  .right{
    @media (min-width:768px){
      display:grid;
      grid-template-columns:1fr 1fr;
    }
  }

  .form{
    padding:20px;
    @media (min-width:768px){
      padding: 0px 13px;
    }
    input{
      padding:10px;
      height:37.5px;
      border-radius:5px;
      border:1px solid #707070;
      box-shadow: 0px 3px 6px #DADADB;
      width:100%;
      @media (min-width:768px){
        width:90%;
      }
    }
    textarea{
      padding:10px;
      border-radius:5px;
      border:none;
      border:1px solid #707070;
      box-shadow: 0px 3px 6px #DADADB;
      width:100%;
      @media (min-width:768px){
        height: 100px;
        width:90%;
      }
      
      }
    }
    button{
      padding:10px 20px;
      width:130px;
      border-radius:5px;
      background-color: #314b73;
      border:none;
      margin-top:20px;
      h5{
        color:white;
      }
    }
    .forms{
      padding-bottom:15px;
      margin:0px auto;
      @media (min-width:768px){
        text-align:center;
      }
    }
  }
  .contact{
    ul{
      padding:0px;
    }
    .number, .mail,.addy{
      display:grid;
      grid-template-columns:1fr 4fr;
      padding-bottom:20px;

      .numpic, .maildiv,.addydiv{
        text-align:center;
      }
    }
    img{
      width:15px;
    }
    @media (min-width:768px){
      padding-right:10px;
    }
    
  }
  h5{
    margin:0px;
    color:#314B73
  }
  @media (min-width:768px){
    .image img {
      object-fit: cover;
      width: 100%;
      height: 360px;
    }
    .contact ul {
      padding: 48px 0px;
    }
  }
    .button{
      padding-left:10px;
    }
`;

export default class Contact extends Component {
  render() {
    return (
      <ContactStyle>
        <Navbar/>
        <ContactStyleGroup>
          <div className="wrapper">
            <div className="left">
              <div className="image">
                <img src={require('../../../assets/rawpixel-651367-unsplash.png')} alt="contact us img" />
              </div>
            </div>
            <div className="right">
              <div className="contactForm">
                <div className="contentHeader"><h3>Contact Us.</h3></div>
                <div className="form">
                  <div className="name forms"><input type="text" placeholder='Enter your name' /></div>
                  <div className="email forms"><input type="text" placeholder='Enter your email address' /></div>
                  <div className="text forms"><textarea placeholder='Message' cols="30" rows="10"></textarea></div>
                  <div className="button"><button><h5>Send Message</h5></button></div>
                </div>
              </div>
              <div className="contact">
                <ul>
                  <li className='number'>
                    <div className="numpic">
                      <img src={require('../../../assets/forward-call.png')} alt="phone" />
                    </div>
                    <div className="pnumber">
                      <h5>+2349099998565</h5>
                      <h5>+2349099998567</h5>
                    </div>
                  </li>
                  <li className='mail'>
                    <div className="maildiv">
                      <img src={require('../../../assets/pathmsg.png')} alt="email" />
                    </div>
                    <div className="email">
                      <h5>info@premiumpropts.com</h5>
                      <h5>support@premiumpropts.com</h5>
                    </div>
                  </li>
                  <li className='addy'>
                    <div className="addydiv">
                      <img src={require('../../../assets/Path 42.png')} alt="addy" />
                    </div>
                    <div className="address">
                      <h5>Address:</h5>
                      <h5>15th Floor, Lion House, Marina</h5>
                      <h5>Lagos Downland,</h5>
                      <h5>Lagos state, Nigeria.</h5>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ContactStyleGroup>
        <Footer />
      </ContactStyle>
    )
  }
};
