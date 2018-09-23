import React, { Component } from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import firebase from './firebase';

class SignIn extends Component{

    onSignIn = () => {
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const token = result.credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
            console.log(user);
            console.log(token);
          }).catch(function(error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            const credential = error.credential;
            // ...
          });
    }

    render(){
        return(
            <Button onClick={this.onSignIn}>Sign In</Button>
        );
    }
}

const provider = new firebase.auth.GoogleAuthProvider();

const Button = styled.button`
margin-bottom:20%;
color: #69c469;

font-size: 2em;
border: 2px solid #69c469;
background-color:white;
height:3.5rem;
width: 14rem;
border-radius:1.75rem;
:focus{
    outline:0
}
`
export default SignIn;
