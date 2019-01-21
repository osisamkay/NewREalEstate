import React from 'react';
import styled from 'styled-components';
import BackgroundSlider from 'react-background-slider'
import HomeBG1 from '../../../assets/Group 161.png';
import HomeBG2 from '../../../assets/Group 158.png';
import HomeBG3 from '../../../assets/Group 159.png';
import MobileBG1 from '../../../assets/1ross-joyner-568729-unsplash.png';
import SectionACard from './SectionACard';

const SectionAStyle = styled.div`
  .App{
    height:100vh;
    object-fit:cover;
    @media(min-width:0px){
      display:none;
    }
    @media(min-width:768px){
      display:block;
    }
  }

  .mobile{
    background-image:url(${MobileBG1});
  }

`;


const SectionA =()=>(
  <SectionAStyle>
    <div className="mobile">
    </div>
    <div className='App'>
    <div className="card">
      <SectionACard />
    </div>
      <BackgroundSlider
        images={[HomeBG1, HomeBG2, HomeBG3]}
        duration={8}
        transition={2}
      />
    </div>
  </SectionAStyle>
)

export default SectionA;
