import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Group 90.png';
import styled from 'styled-components';
import User from '../../assets/add-user-interface-outlined-symbol.png';
import Navlogo from '../../assets/iconfinder_menu-alt_134216.png';

const Nav = styled.div`
  position:fixed;
  z-index:1;
  width:100%;

  a img{
    width: 115px;
    float: left;
    padding: 5px;
  }
  img{
    float: right;
    padding: 6px;
    width:44px;
  }
  .collapse::after{
    content:'';
    clear:both;
    display:table;
  }
  .collapse{
    background: rgb(255,255,255);
    background: -moz-linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(104,167,195,1) 63%, rgba(68,146,181,1) 75%, rgba(37,128,168,1) 98%, rgba(218,218,219,1) 100%);
    background: -webkit-linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(104,167,195,1) 63%, rgba(68,146,181,1) 75%, rgba(37,128,168,1) 98%, rgba(218,218,219,1) 100%);
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(104,167,195,1) 63%, rgba(68,146,181,1) 75%, rgba(37,128,168,1) 98%, rgba(218,218,219,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#dadadb",GradientType=1);
  }
  .navlinks a{
    text-decoration: none;
    display: block;
    text-align: center;
    font-size: 16px;
    font-family:Segoe UI;
    padding: 5px;
    background-color: #b7c2f1;
    color: #293064;
    animation: fadeInLeft .6s both;
    &:nth-child(even){
      background:#052758;
      color: white;
    }
    
  }
  .rm-navlinks{
    display:none;
  }
  @media (min-width:768px){
    .nav_respond{
      display:none;
    }
    
  }
  @keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }
    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}
`;

const Navgroup = styled.nav`
  display:none
  
  @media (min-width:768px){
    background: rgb(255,255,255);
    background: -moz-linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(104,167,195,1) 63%, rgba(68,146,181,1) 75%, rgba(37,128,168,1) 98%, rgba(218,218,219,1) 100%);
    background: -webkit-linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(104,167,195,1) 63%, rgba(68,146,181,1) 75%, rgba(37,128,168,1) 98%, rgba(218,218,219,1) 100%);
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(104,167,195,1) 63%, rgba(68,146,181,1) 75%, rgba(37,128,168,1) 98%, rgba(218,218,219,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#dadadb",GradientType=1);
    opacity:.88;
    text-align: center;
    padding:10px 0 10px 0;
    display: grid;
    grid-template-columns: 1fr 2fr ;
    align-items: center;
    justify-items: left;
    width:100%;
    .GridLink{
        display:grid;
        grid-template-columns:repeat(4,1fr);
        grid-gap: 20px;
        margin-left:auto;
        padding-right:15%;
    }
    .logo{
      padding-left:27%;
    }
    @media (min-width:1440px){
      .GridLink{
        grid-gap:45px;
      }
    }
  }

  @media (min-width:1024px){
    
  }

  a {
    font-weight: 500;
    font-family: Segoe UI;
    font-size: 16px;
    color: #314B73;
  }
  .user{
    width:40px;
  }
  
`; 



class Navbar extends Component{
  constructor() {
    super();
    this.state = {
      condition: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      condition: !this.state.condition
    })
  }
  render(){
    return(
        <Nav>
            <div className="nav_respond">
                <div className="collapse">
                    <Link to="/">
                        <img src={Logo} alt="logo" />
                    </Link>
                    <img src={Navlogo} alt="NavIcon" onClick={ this.handleClick } />
                </div>
                <div className={this.state.condition ? "navlinks" : "rm-navlinks"} >
                    <Link to="/">Home</Link>
                    <Link to="/About">About Us</Link>
                    <Link to="/Property">Properties</Link>
                    <Link to="/Contact">Contact Us</Link>
                </div>
            </div>
            <Navgroup>
                <div className='logo'>
                <Link to="/"><img src={Logo} className='logo2' alt="logo" /></Link>
                </div>
                <div className="GridLink">
                    <Link to="/">Home</Link>
                    <Link to="/About">About Us</Link>
                    <Link to="/Property">Properties</Link>
                    <Link to="/Contact">Contact Us</Link>
                </div>
            </Navgroup>
        </Nav>
    )
  }
  
};

export default Navbar;
