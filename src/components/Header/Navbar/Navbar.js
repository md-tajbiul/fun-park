import React from 'react';
import './Navbar.css';
import parkLogo from '../../../images/parkLogo.png';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light navy fixed-top">
                <div class="container-fluid">
                    <img className="img-fluid" style={{ width: "80px" }} src={parkLogo} alt="" srcset="" />
                    <a class="navbar-brand fs-2 ms-1 option" href="#header">Fun Park</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse me-2 justify-content-end" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active option" aria-current="page" href="#header">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active option" aria-current="page" href="#about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active option" aria-current="page" href="#offers">Offers</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active option" aria-current="page" href="#benefits">Benefits</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active option" aria-current="page" href="#contactUs">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;