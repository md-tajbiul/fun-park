import React from 'react';
import About from './About/About';
import Footer from './Footer/Footer';
// import Deals from './Deals/Deals';
import Header from './Header/Header';

const Main = () => {
    return (
        <div>
            <Header/>
            <About/>
            {/* <Deals/> */}
            <Footer></Footer>
        </div>
    );
};

export default Main;