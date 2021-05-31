import React from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
// import Deals from './Deals/Deals';
import Header from './Header/Header';

const Main = () => {
    return (
        <div>
            <Header/>
            <About/>
            {/* <Deals/> */}
            <Contact></Contact>
        </div>
    );
};

export default Main;