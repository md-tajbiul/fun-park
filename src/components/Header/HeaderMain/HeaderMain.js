import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './HeaderMain.css';

const HeaderMain = () => {
    
    return (
        <div className="header">
            <div class="centered">
                <h3>Make Your Day Better</h3>
                <h2>Fun Park Is Now Open!</h2>
            </div>
            
            <div> 
            <a href="#about">
            <button className="headerButton">Learn More <FontAwesomeIcon className="ms-1" icon={faAngleRight} size="1x"></FontAwesomeIcon></button>
            </a>
            </div>

        </div>
    );
};

export default HeaderMain;