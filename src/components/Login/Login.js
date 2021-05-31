import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import '../../App.css';
import firebaseConfig from '../../firebase.config';
import googleIcon from '../../Images/googleIcon.png';
import Navbar from '../Header/Navbar/Navbar';
import './Login.css';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory()
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const [newUser, setNewUser] = useState(false);

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    })

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const style = {
        border: "1px solid lightGrey",
        backgroundColor: "white",
        borderRadius: "10px",
        width: "250px",
        height: "50px",
        marginTop: "5px"
    }

    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(result => {
                const { displayName, photoURL, email } = result.user;
                const signedInUser2 = { name: displayName, email };
                setLoggedInUser(signedInUser2);
                history.replace(from);
            })
            .catch(error => {
                console.log(error);
                console.log(error.message);
            })
    }

    return (
        <div className="container">
            <div>
                <Navbar></Navbar>
            </div>
            <div className="pt-5 mt-5 d-flex justify-content-center">
                <button className="fs-5" style={style} onClick={handleGoogleSignIn}> <img style={{ width: "25px", marginBottom: "4px", marginRight: "5px"}} src={googleIcon} alt="" srcset="" />Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;
