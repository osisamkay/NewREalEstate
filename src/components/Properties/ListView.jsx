import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Navbar from '../navbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import Loader from '../../../assets/loader.gif';
import { Carousel } from "react-responsive-carousel";


const Liststyle = styled.div`
  width:90%;
  padding:120px 0;
  margin:0px auto;
  box-shadow:0px 3px 6px rgba(0,0,0,.16);
  img{
    width:100%;
  }
  .viewright{
    form{
      background:#27446E;

    }
    h3{
      font-size: 25px;
      text-align: center;
      padding: 41px 0;
      color: white;
    }
    .agent{
      text-align:center;
      img{
        object-fit:cover;
        width:75%;
      }
    }
    .name h4{
      font-size:17.5px;
      color:white;
      text-align:center;
    }
    .name h5{
      font-size:14.5px;
      color:white;
      font-weight:600;
      text-align:center;
    }
    .form{
      color:white;
      padding:15px;
      input,label,textarea{
        display:block;
      }
      label{
        font-size:16px;
        display:block;
        padding-bottom:5px;
      }
      input{
        width: 100%;
        height: 37.7px;
        border-radius: 5px;
      }
      textarea{
        width: 100%;
        border-radius: 5px;
      }
    }
  }
  .button{
    text-align:center;
    padding: 40px 0;
  }
  input[type="button"] {
    height: 45px;
    width: 79%;
    border: 0;
    border-radius: 5px;
    font-size: larger;
    background-color: #D28662;
    color: white;
    font-family: Tahoma;
  }
  .Image {
    width: 25%;
    margin: 0px auto;
    position: relative;
    left: 37%;
  }
  .viewleft{
    box-shadow:0px 3px 6px #DADADB;
    .carousel .slide img {
      width: 100%;
      vertical-align: top;
      border: 0;
      object-fit: cover;
      height: 180px;
      @media (min-width:768px){
        height: 300px;
      }
    }
    .thumbs-wrapper.axis-vertical {
      text-align: center;
    }
    h2{
      color:#28456F;
      text-align:center;
      text-transform: capitalize;
      font-size:40px;
    }
    h4{
      color:#28456F;
      text-align:center;
      font-size:29px;
      margin:0px;
      font-weight:400;
    }
    h3{
      color:#404040;
      font-size:24px;
      text-align:center;
    }
    .agent{
      padding-bottom:20px;

    } 
    ul.thumbs.animated {
      padding: 0px;
    }

  }
`;

const Info = styled.div`
  width:90%;
  margin:0px auto;

  h1,h2,h3,h4,h5,h6{
    margin:0px;
    display:inline;
  }
  div{
    padding-bottom:20px;
  }
  h6{
    display: inline;
    font-size: 18.5px;
    color:rgba(64,64,64,0.62);
    padding-left: 20px;
    position: relative;
    top: -2px;
  }

  .status h5{
    font-size:21px;
    color:#27446E;
  }
  .id h5{
    font-size:21px;
    color:#27446E;
  }
  
  img{
    width:32px;
  }
 @media (min-width:768px){
   display:grid;
   grid-template-columns:1fr 1fr;

   .info {
    margin-left: 24%;
  }
 }
 @media (min-width:1024px){
   .info {
    margin-left: 9%;
  }
 }
`;

const Listgroup = styled.div`
@media (min-width: 1024px){
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-gap:10px;
  }
`;



class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: {},
      ready: 'initial',
    }
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    const id = params.id;
    this.setState({ ready: 'loading' });
    axios({
      method: 'get',
      url: `https://api.airtable.com/v0/apprAJrG1euRf2tmF/Listings/${id}`,
      headers: { Authorization: `Bearer keyRMRWZ0xrBXA8Yv` },
    }).then(({ data }) => {
      console.log(data)
      this.setState({
        list: data,
        ready: 'loaded',
      });
    });

  }

  render() {
    const { list, ready } = this.state;

    return (
      <Fragment>
        <Navbar />
        <Liststyle>
          {ready === 'loading' ? (<img src={Loader} className='Image' alt="loader" />) : ''}
          {ready === 'loaded' && (
            <Fragment>
              <Listgroup>
                <div className="viewleft">
                  <Carousel autoPlay>
                    <div>
                      <img src={list.fields.icon[0].url} />
                    </div>
                    <div>
                      <img src={list.fields.icon[1].url} />
                    </div>
                    <div>
                      <img src={list.fields.icon[2].url} />
                    </div>
                    <div>
                      <img src={list.fields.icon[3].url} />
                    </div>
                    <div>
                      <img src={list.fields.icon[4].url} />
                    </div>
                  </Carousel>
                  <h2>{list.fields.Tag}</h2>
                  <Info>

                    <div className="size info">
                      <img src={require("../../../assets/Path 30.png")} alt="location" />
                      <h6>{list.fields.Name}</h6>
                    </div>
                    <div className="size info">
                      <img src={require("../../../assets/width (1).png")} alt="area" />
                      <h6>{list.fields.Area}</h6>
                    </div>
                    <div className="bed info">
                      <img src={require('../../../assets/bed.png')} alt="bed" />
                      <h6>{list.fields.Bedrooms}</h6>
                    </div>
                    <div className="bath info">
                      <img src={require('../../../assets/bathtub-with-opened-shower.png')} alt="bath" />
                      <h6>{list.fields.Bathrooms}</h6>
                    </div>
                    <div className="id info">
                      <h5>id: </h5>
                      <h6>{list.id}</h6>
                    </div>
                    <div className="status info">
                      <h5>Status: </h5>
                      <h6>{list.fields.Status}</h6>
                    </div>
                  </Info>

                  <h4>Get it for</h4>
                  <h2>{list.fields.Asking}</h2>
                  <h3 className='agent'>Contact the agent if interested.</h3>
                </div>
                <div className="viewright">
                  <form>
                    <h3>Contact The Agent</h3>
                    <div className="agent">
                      <img src={list.fields.AgentPics[0].url} alt="agent" />
                    </div>
                    <div className="name">
                      <h4>{list.fields.Agents}</h4>
                      <h5>{list.fields.Star}</h5>
                    </div>
                    <div className="form">
                      <label htmlFor="name">Name</label>
                      <input type="text" name='Name' />
                    </div>
                    <div className="form">
                      <label htmlFor="email">Email</label>
                      <input type="email" name='email' />
                    </div>
                    <div className="form">
                      <label htmlFor="message">Message</label>
                      <textarea name="message" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="button">
                      <input type="button" value="Send Message" />
                    </div>
                  </form>
                </div>
              </Listgroup>
            </Fragment>
          )}

        </Liststyle>
        <Footer />
      </Fragment>
    );
  }
}

export default ListView;
