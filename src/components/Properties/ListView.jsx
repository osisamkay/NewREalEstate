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
  padding-top:120px;
  margin:0px auto;
  img{
    width:100%;
  }
  .viewright{
    text-align:justified;
    h5{
      background-color:#b7c2f1;
      padding:20px;
    }
  }
  .btn{
    text-align:center;
  }
  input[type="button"] {
    height: 45px;
    width: 192px;
    border: 0;
    border-radius: 0.5em;
    font-size: larger;
    padding: -23px;
    background-color: #031249;
    color: #b7c2f1;
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
      font-size:25px;
    }
    h4{
      color:#28456F;
      text-align:center;
      font-size:25px;
      margin:0px;
      font-weight:400;
    }
    .agent{
      padding-bottom:20px;

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
    font-size: 15px;
  }
  
  img{
    width:17px;
  }
 @media (min-width:768px){
   display:grid;
   grid-template-columns:1fr 1fr;

   .info {
    margin-left: 24%;
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
                  {/* <img src={list.fields.icon[0].url} alt="listing items" /> */}
                  
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
                      <img src={require("../../../assets/Path 30.png" )}alt="location"/>
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
                    <div className="status info">
                      <h5>Status: </h5>
                      <h6>{list.fields.Status}</h6>
                    </div>
                    <div className="id info">
                      <h5>id: </h5>
                      <h6>{list.id}</h6>
                    </div>
                  </Info>

                  <h4>Get it for</h4>
                  <h2>{list.fields.Asking}</h2>
                  <h4 className='agent'>Contact the agent if interested.</h4>
                </div>
                <div className="viewright">
                  
                  <h4>{list.fields.Asking}</h4>
                  <h5>{list.fields.Summary}</h5>
                  
                  <div className="btn">
                    <Link to="/Listings">
                      <input type="button" value="Return" />
                    </Link>
                  </div>
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
