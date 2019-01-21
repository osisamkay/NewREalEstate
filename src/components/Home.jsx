import React from 'react'
import Navbar from './navbar';
import SectionB from './Homepage/SectionB';
import SectionC from './Homepage/SectionC';
import SectionD from './Homepage/SectionD';
import SectionE from './Homepage/SectionE';
import Footer from './Footer';
import AutoPlay from './Homepage/SectionA';


const Home = ()=>
(
    <div> 
        <Navbar />
        <AutoPlay />
        <SectionB />
        <SectionC />
        <SectionD />
        <SectionE />
        <Footer />
    </div>
);

export default Home;
