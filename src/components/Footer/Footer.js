import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container pt-3">
        <div className="row">
            {/* column1 */}
            <div className="col-md-4 pe-5">
                <h4 className="mb-2"><FontAwesomeIcon className="icon active-icon me-1" icon={faMapMarkerAlt}></FontAwesomeIcon>Address</h4>
                <h6>#245(2nd Floor), Road #10</h6>
                <h6>Banani, Dhaka</h6>
                <h6>Phone: 016xxxxxxxx</h6>
                <h6>E-mail:info@funpark.com</h6>
            </div>
            {/* column2 */}
            <div className="col-md-4 text-center">
                    <h4>Quick Links</h4>
                    <h6>Amazon</h6>
                    <h6>Alibaba</h6>
                    <h6>Google</h6>
            </div>
            {/* column3 */}
            <div className="col-md-4 text-center">
                <h4>Social Links</h4>
                <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
            </div>
            </div>
        </div>
        <br />
         <div className="copyRight text-center pb-1">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
        </div>
    );
};

export default Footer;