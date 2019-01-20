import React from 'react';
import styled from 'styled-components';
import User1 from '../../../assets/tikkho-maciel-158219-unsplash.png';
import User2 from '../../../assets/eduardo-dutra-614571-unsplash.png';
import User3 from '../../../assets/vonecia-carswell-742892-unsplash.png';

const SectionEStyle = styled.div`
  background-color:#ffffff;
  h2{
    text-align: center;
    padding-top: 60px;
    margin: 0px;
    font-size:40px;
    color:#27446E;
  }
`;
const SectionEStyleGroup = styled.div`
  width:90%;
  margin:0px auto;
  padding:60px 0px 60px 0px;
  .user{
    text-align:center;
    background-color:#DADADB;
    padding:25px;
    box-shadow: 0 3px 6px black;
    &:hover {
      background-color:#ffffff;
      transform: scale(1.2);
    }
    @media (min-width:768px){
      padding:40px;
    }
    @media (min-width:1440px){
      padding:65px;
    }
    img{
      width:50%;
    }
  }
  p{
    text-align:center;
  }
  @media (min-width:768px){
    display:grid;
    grid-template-columns:repeat(3,auto);
    
  }
`;


const SectionE =()=>(
  <SectionEStyle>
      <h2>What Our Clients Say</h2>
    <SectionEStyleGroup>
      <div className="user">
        <img src={User1} alt="user" />
        <p>These guys are excellent. Cant thank the team enough for ensuring our recent move went smoothly efficiently and quick.</p>
      </div>
      <div className="user">
        <img src={User2} alt="user" />
        <p>These guys are excellent. Cant thank the team enough for ensuring our recent move went smoothly efficiently and quick.</p>
      </div>
      <div className="user">
        <img src={User3} alt="user" />
        <p>These guys are excellent. Cant thank the team enough for ensuring our recent move went smoothly efficiently and quick.</p>
      </div>
    </SectionEStyleGroup>
  </SectionEStyle>
);

export default SectionE;
