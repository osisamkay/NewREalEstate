import React, { Suspense } from "react";
import styled from 'styled-components';
import BackgroundSlider from 'react-background-slider';
import HomeBG1 from '../../../assets/ross-joyner-568729-unsplash.jpg';
import HomeBG2 from '../../../assets/s-o-c-i-a-l-c-u-t-1146981-unsplash.jpg';
import HomeBG3 from '../../../assets/nastuh-abootalebi-284882-unsplash.jpg';
import MobileBG1 from '../../../assets/ross-joyner-568729-unsplash.jpg';
import SectionACard from './SectionACard';
const SimpleSlider = React.lazy(() => import('./SectionACardCarousel'));


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

  .card{
    position: relative;
    top: 75%;
    text-align:center;

  }

  .cardslider{
    width: 600px;
    position: absolute;
    top: 153px;
    left: 104px;
    @media (min-width:1024px){
      left:93px;
    }
    @media (min-width:1440px){
      left:135px;
    }
  }


`;


const SectionA = () => (
  <SectionAStyle>
    <div className="mobile">
    </div>
    <Suspense fallback={<div>Loading...</div>}>
      <div className='App'>
        <div className="cardslider"><SimpleSlider />
        </div>
        <div className="card">
          <SectionACard />
        </div>
        <BackgroundSlider
          images={[HomeBG1, HomeBG2, HomeBG3]}
          duration={8}
          transition={2}
        />
      </div>
    </Suspense>
  </SectionAStyle>
)

export default SectionA;
