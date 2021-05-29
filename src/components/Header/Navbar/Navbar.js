import React from 'react';
import parkLogo from '../../../Images/parkLogo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light fixed-top">
                <div className="container-fluid"> 
                <a className="anchorTag navbar-brand fs-2 ms-1" href="/">
                    <img className="img-fluid" style={{ width: "70px", height: "34px" }} src={parkLogo} alt=""/> Fun Park</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse me-2 justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="anchorTag nav-link active" aria-current="page" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="anchorTag nav-link active" aria-current="page" href="#deals">Deals</a>
                        </li>
                        <li className="nav-item">
                            <a className="anchorTag nav-link active" aria-current="page" href="#benefits">Benefits</a>
                        </li>
                        <li className="nav-item">
                            <a className="anchorTag nav-link active" aria-current="page" href="#contact">Contact</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;