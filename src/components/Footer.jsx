import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
  background-color:#283949;
`;
const FooterGroup = styled.footer`
  padding:30px;
  @media (min-width:1024px){
    padding:80px;
  }
  h3{
    margin:0px;
    color:white;
  }
  .sect1{
    padding:30px 0px;
    @media (min-width:1024px){
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      align-items: center;
      grid-gap:80px;
    }
    .input{
      display:inline;
      input{
        width:100%;
        height: 40px;
        border-radius:6px;
        padding: 20px;
        @media (min-width:768px){
          width:80%;
        }
        @media (min-width:1024px){
          width:75%;
        }
      }
      .btn{
        display: block;
        background-color: white;
        padding: 11px;
        cursor: pointer;
        border-radius: 6px;
        width: 28%;
        text-align: center;
        margin: 20px auto;
        color: #27446e;
        @media (min-width:768px){
          display:inline-block;
          width: 15%;
          margin-left: 35px;
        }
        @media (min-width:1024px){
          width:22%;
          margin-left: 9px;
        }
      }
    }
  }
  .fonts{
    cursor: pointer;
    ul{
      display: grid;
      grid-template-columns: repeat(4,1fr);
      align-items: center;
      justify-items: center;
      padding: 10px 0px;

      .facebook{
        width:6px;
      }

      li img{
        width:10px;
      }
    } 
  }

  .contact{
    text-align:center;
    p{
      color:white;
    }
    ul{
      padding:0px;
      @media (min-width: 768px){
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      @media (min-width: 1024px){
        display:block;
      }
    }
    img{
      width:17px;
    }
    .email{
      padding-top:15px;
    }
    .email p{
      display:block;
      margin:0px;
      text-align: left;
    }
    .numpic {
      text-align: center;
    }
    .number{
      display: grid;
      grid-template-columns: 1fr 4fr;
      align-items: center;
      justify-content: center;
    }
    .pnumber p{
      display: block;
      margin:0px;
      text-align:left;
    }
    .mail {
      display: grid;
      grid-template-columns: 1fr 4fr;
      align-items: center;
      justify-content: center;
    }
    .maildiv{
      text-align:center;
    }
  }

  .sect2{
    @media(min-width:768px){
      display:grid;
      grid-template-columns:repeat(2,1fr);
      align-items: center;
    }
    @media(min-width:1024px){
      display:grid;
      grid-template-columns:repeat(4,1fr);
      align-items: center;
    }

    color:white;
    .footerlist {
      text-align: center;
      padding: 20px 0px;
      @media(min-width:768px){
        text-align: left;
        padding: 20px 75px;
      }
      @media(min-width:1024px){
        text-align: left;
        padding: 20px 0px;
      }
      h5{
        margin:0px;
      }
      ul{
        padding:0px;
        margin:0px;
        cursor: pointer;
      }
    }
    
  }
  .footerImage{
    text-align:center;
    img{
      width:250px;
      padding:15px;
    }
  }
  .sect2style{
    @media(min-width:1024px){
      display:grid;
      grid-template-columns:4fr 1fr;
      align-items: center;
      grid-gap: 27px;
    }
  }
  
`;

const Footer = ()=>(
  <FooterStyle>
    <FooterGroup>
    <h3>Let's find your dream house together</h3>
      <section className="sect1">
        <div className="input">
          <input type="text" name="search" placeholder="Enter your email address" />
          <div className="btn">
            Submit
          </div>
        </div>
        <div className="fonts">
            <ul>
              <li><img src={require('../../assets/facebook-letter-logo.png')} alt="fb"className="facebook" /></li>
              <li><img src={require('../../assets/twitter-black-shape.png')} alt="tw" /></li>
              <li><img src={require('../../assets/linked-in-logo-of-two-letters.png')} alt="in" /></li>
              <li><img src={require('../../assets/letter-m.png')} alt="medium" /></li>
            </ul>
          </div>
        <div className="contact">
          <ul>
            <li className='number'>
              <div className="numpic">
                <img src={require('../../assets/path.png')} alt="phone" />
              </div>
              <div className="pnumber">
                <p>+2349099998565</p>
                <p>+2349099998567</p>
              </div>
            </li>
            <li className='mail'>
              <div className="maildiv">
                <img src={require('../../assets/path-1.png')} alt="email" />
              </div>
              <div className="email">
                <p>info@premiumpropts.com</p>
                <p>support@premiumpropts.com</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <div className="sect2style">
        <section className="sect2">
          <div className="footerlist">
            <h5>Company</h5>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footerlist">
            <h5>Discover</h5>
            <ul>
              <li>Book a Tour</li>
              <li>Properties for Sale</li>
              <li>Properties for Rent</li>
            </ul>
          </div>
          <div className="footerlist">
            <h5>General</h5>
            <ul>
              <li>Reviews</li>
              <li>Legal Notice</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footerlist">
            <h5>Address:</h5>
            <ul>
              <li>15th Floor, Lion House, Marina,</li>
              <li>Lagos Downland,</li>
              <li>Lagos state, Nigeria.</li>
            </ul>
          </div>
        </section>
        <div className="footerImage">
          <img src={require('../../assets/Group 106.png')} alt="" />
        </div>
      </div>
    </FooterGroup>
  </FooterStyle>

);

export default Footer;
