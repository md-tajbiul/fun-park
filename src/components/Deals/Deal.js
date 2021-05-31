import React from 'react';
import { useHistory } from 'react-router';

const Deal = ({deal}) => {
    const history = useHistory();
    const handleBook = title => {
        history.push(`/checkout/${title}`);        
    }
    return (
    <div className="col-md-4 dealBox" onClick={()=>handleBook(deal.title)}> 
        <img
        src={deal.image}
        className="w-100 shadow-1-strong rounded mb-4 image"
        alt=""
        />
        <div className="middle">
            <h2 style={{color:"#000"}}>{deal.title}</h2>
            <div className="text">Click Me</div>
        </div>
    </div>
    );
};

export default Deal;