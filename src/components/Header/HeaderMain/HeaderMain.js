import React from 'react';
import bg from '../../../images/bg.jpg';
import './HeaderMain.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const HeaderMain = () => {
    
    return (
        <div className="bg">
            <img className="img-fluid" style={{backgroundRepeat: "no-repeat", backgroundSize: "cover", width: "100%", height: "655px"}} src={bg} alt="" srcset="" />
            <h2 className="text1">Make Your Day Better<br/>Fun Park Is Now Open!</h2>
            <button id="about" className="button-design mt-4">Learn More<FontAwesomeIcon className="ms-1" icon={faArrowRight} size="1x"></FontAwesomeIcon></button>
        </div>
    );
};

export default HeaderMain;