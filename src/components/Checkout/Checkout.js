import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Book from './Book';

const Checkout = () => {
    const {title} = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="container-fluid" style={{height:"90vh"}}>
            <div className="pt-5">
                <Book loggedInUser={loggedInUser} title={title}></Book>
            </div>  
        </div>
    );
};

export default Checkout;