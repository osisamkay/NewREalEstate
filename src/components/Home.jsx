import React from 'react'
import Navbar from './navbar';
import SectionA from './Homepage/SectionA';
import SectionB from './Homepage/SectionB';
import SectionC from './Homepage/SectionC';
import SectionD from './Homepage/SectionD';
import SectionE from './Homepage/SectionE';
import Footer from './Footer';


const Home = ()=>
(
    <div> 
        <Navbar />
        <SectionA />
        <SectionB />
        <SectionC />
        <SectionD />
        <SectionE />
        <Footer />
    </div>
);

export default Home;
