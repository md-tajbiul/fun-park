import React from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import Deals from './Deals/Deals';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Main = () => {
    return (
        <div>
            <Header/>
            <About/>
            <Deals/>
            <Contact></Contact>
            <Footer/>
        </div>
    );
};

export default Main;