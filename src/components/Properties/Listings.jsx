import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar';
import Footer from '../Footer';
import styled from 'styled-components';
import axios from 'axios';
import Loader from '../../../assets/loader.gif';
import ListCard from './ListCard';

const List = styled.div`
  
`;
const ListRight = styled.div`

`;
const ListLeft = styled.div`

`;

class Listing extends Component {

  constructor() {
    super();
    this.state = {
      lists: [],
      ready: 'initial',
      search: "",
    };
  }
  componentDidMount() {
    this.setState({
      ready: 'loading',
    });
    axios({
      method: 'get',
      url: `https://api.airtable.com/v0/apprAJrG1euRf2tmF/Listings`,
      headers: { Authorization: `Bearer keyRMRWZ0xrBXA8Yv` },

    }).then(({ data: { records } }) => {
      console.log(records);
      this.setState({
        ready: 'loaded',
        lists: records,
      })
    })
  }
  locationChange(e) {
    this.setState({
      search: e.target.value
    })
  }
  PropertyChange(e) {
    this.setState({
      search: e.target.value
    })
  }

  render() {
    const { lists, ready, search } = this.state;
    const filtered = lists.filter(list => {
      return list.fields.Name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });


    return (
      <div>
        <Navbar />
        <List>
          <div className="header">
            <img src={require('./../../../assets/jesse-roberts-146556-unsplash.png')} alt="header"/>
          </div>
          <div className="listgroup">
            <ListLeft>
              <div className="loader">
                {lists.length ? '' : (<h3>There are no list items</h3>)}
                {ready === 'loading' ? (<div className='loader-img'><img src={Loader} className='Image' alt="loader" /></div>) : ''}
              </div>
              <div className="right">
                {filtered.map(list => (
                  <div key={list.id}>
                    <Link to={`/Listview/${list.id}`}>
                      <ListCard
                        image={list.fields.icon ? list.fields.icon[0].url : ''}
                        Price={list.fields.Asking}
                        location={list.fields.Name}
                        bath={list.fields.Bathrooms}
                        bed={list.fields.Bedrooms}
                        area={list.fields.Area} >
                        <div className="child1">
                          <h4>{list.fields.Tag}</h4>
                          <div className='button'><button>View</button></div>
                        </div>
                      </ListCard>
                    </Link>
                  </div>
                ))}
              </div>
            </ListLeft>
            <ListRight>
              <div className="listright">
                <h3>Filter</h3>
                <form>
                  <input type="search" name="search" placeholder='Location' onChange={this.locationChange.bind(this)} />
                  <div className="Property">
                    <select name="property-type" className="app-select" required >
                      <option data-display="Property Type">Property Type</option>
                      <option value="1">Modern Luxury Townhouse</option>
                      <option value="2">terraced duplex</option>
                      <option value="3">Urban Townhouse</option>
                      <option value="3">Downtown Condo</option>
                      <option value="3">Modern Beach House</option>
                      <option value="3"> Luxury Hamptons Home</option>
                      <option value="3"> Detached Duplex</option>
                      <option value="3"> Semi-Detached Duplex</option>
                      <option value="3"> Detached Bungalow</option>

                    </select>
                  </div>
                  <div className="bedrooms">
                    <select name="bedroom" className="app-select" required onChange={this.PropertyChange.bind(this)}>
                      <option data-display="Bedrooms">Bedrooms</option>
                      <option value="1">1BR</option>
                      <option value="2">2BR</option>
                      <option value="3">3BR</option>
                      <option value="4">4BR</option>
                      <option value="5">5BR</option>
                    </select>
                  </div>
                  <div className="PriceRange">
                    <input type="text" id="range" name="range" placeholder='Price Range' />
                  </div>
                  <div className="AreaRange">
                    <input type="text" id="range2" name="range" placeholder='Area Range' />
                  </div>
                  <div className="button">
                    <button className='propt_btn'>Search Properties</button>
                  </div>
                </form>
              </div>
            </ListRight>
          </div>
        </List>
        <Footer />
      </div>
    )
  }
}
export default Listing;
