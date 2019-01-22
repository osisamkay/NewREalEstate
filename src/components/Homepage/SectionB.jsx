import React, { Component,Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SectionBCards from './SectionBCards';



const H1 = styled.div`
  text-align:center;
  color:#283949;
  padding:60px 30px;
  font-size:50px;
  font-family:Segoe UI;
`;

const SectE = styled.div`
  background-color:#283949;
`;

const SectEGroup = styled.div`
  padding:60px 0;
  @media(mi:786pxn-width)
`;
const SectE1 = styled.div`

  h2{
    color:#ffffff;
    font-size:40px;
    text-align:center;
    margin:0px;
    padding:20px;
  }

  .child1{
    display:inline;
    h4{
      float:left;
      margin:0px;
      padding:15px;
    }
    .button{
      padding:8px ;
    }
    button{
      float: right;
      padding: 10px;
      border: none;
      width: 65px;
      border-radius: 5px;
      background-color: #314b73;
      color:white;
    }
    
    &::after{
      content:'';
      clear:both;
      display:table;
    }

  }
  @media (min-width:768px){
    .cards{
      display:grid;
      grid-template-columns:repeat(2,1fr);
      width:90%;
      margin:0px auto;
    }
  }
  @media (min-width:1024px){
    .cards{
      display:grid;
      grid-template-columns:repeat(3,1fr);
      width:90%;
      margin:0px auto;
    }
  }

`;



export default class SectionB extends Component {
  render() {
    return (
      <Fragment>
        <H1>Top Rated Properties</H1>
        <SectE>
          <SectEGroup>
            <SectE1>
              <h2>Apartment</h2>
              <div className="cards">
              <SectionBCards 
                image={require('../../../assets/pexels-photo-1663263.jpeg')}
                 Price={`450,000`}
                 location={`Lekki Phase 1`}
                 bath={`2 Bathrooms`}
                 bed={`2 Bedrooms`}
                 area={`100, sq ft`} >
                  <div className="child1">
                    <h4>5 Bedroom Duplex</h4>
                    <div className='button'>
                      <Link to={`/Listview/recCWkNvSJfABckX2`}>
                        <button>View</button>
                      </Link>
                    </div>
                  </div>
                </SectionBCards>
                <SectionBCards 
                image={require('../../../assets/pexels-photo-273683.jpeg')}
                 Price={ `250,000`}
                 location={`Ojota Ogudu`}
                 bath={`2 Bathrooms`}
                 bed={`2 Bedrooms`}
                 area={`100, sq ft`} >
                  <div className="child1">
                    <h4>3 Bedroom Flat</h4>
                    <div className='button'><button>View</button></div>
                  </div>
                </SectionBCards>
                <SectionBCards 
                image={require('../../../assets/pexels-photo-271699.jpeg')}
                 Price={ `500,000`}
                 location={`Maryland`}
                 bath={`2 Bathrooms`}
                 bed={`2 Bedrooms`}
                 area={`100, sq ft`} >
                  <div className="child1">
                    <h4>2 Bedroom Flat</h4>
                    <div className='button'><button>View</button></div>
                  </div>
                </SectionBCards>
                
              </div>
            </SectE1>
            <SectE1>
              <h2>Commercial</h2>
              <div className="cards">
              <SectionBCards 
                image={require('../../../assets/pexels-photo-374894.jpeg')}
                 Price={ `45,000,000`}
                 location={`Maryland`}
                 bath={`2 Bathrooms`}
                 bed={`2 Bedrooms`}
                 area={`100, sq ft`} >
                  <div className="child1">
                    <h4>Maryland Mall</h4>
                    <div className='button'><button>View</button></div>
                  </div>
                </SectionBCards>
                <SectionBCards 
                image={require('../../../assets/pexels-photo-264507.jpeg')}
                 Price={`50,000,000`}
                 location={`Lekki Phase 1`}
                 bath={`2 Bathrooms`}
                 bed={`2 Bedrooms`}
                 area={`100, sq ft`} >
                  <div className="child1">
                    <h4>Lekki Mall</h4>
                    <div className='button'><button>View</button></div>
                  </div>
                </SectionBCards>
                <SectionBCards 
                image={require('../../../assets/pexels-photo-380768.jpeg')}
                 Price={ `30,000,000`}
                 location={`Gbagada Phase 1`}
                 bath={`3 Bathrooms`}
                 bed={`3 Bedrooms`}
                 area={`100, sq ft`} >
                  <div className="child1">
                    <h4>3 Room Office</h4>
                    <div className='button'><button>View</button></div>
                  </div>
                </SectionBCards>
                
              </div>
            </SectE1>
            <SectE1>
              <h2>Residential</h2>
              <div className="cards">
              <SectionBCards 
                image={require('../../../assets/pexels-photo-323775.jpeg')}
                 Price={ `51,000,000`}
                 location={`Ojota Ogudu, GRA`}
                 bath={`10 Bathrooms`}
                 bed={`10 Bedrooms`}
                 area={`100, sq ft`} >
                  <div className="child1">
                    <h4>10 Bedroom Duplex</h4>
                    <div className='button'><button>View</button></div>
                  </div>
                </SectionBCards>
                <SectionBCards 
                image={require('../../../assets/pexels-photo-1370704.jpeg')}
                 Price={`450,000`}
                 location={`Surulere`}
                 bath={`4 Bathrooms`}
                 bed={`4 Bedrooms`}
                 area={`100, sq ft`} >
                  <div className="child1">
                    <h4>4 Bedroom Townhouse</h4>
                    <div className='button'><button>View</button></div>
                  </div>
                </SectionBCards>
                <SectionBCards 
                image={require('../../../assets/pexels-photo-323774.jpeg')}
                 Price={ `11,000,000`}
                 location={`Sangotedo`}
                 bath={`6 Bathrooms`}
                 bed={`6 Bedrooms`}
                 area={`100, sq ft`} >
                  <div className="child1">
                    <h4>6 Bedroom Duplex</h4>
                    <div className='button'><button>View</button></div>
                  </div>
                </SectionBCards>
                
              </div>
            </SectE1>
          </SectEGroup>
        </SectE>
      </Fragment>
    )
  }
}
