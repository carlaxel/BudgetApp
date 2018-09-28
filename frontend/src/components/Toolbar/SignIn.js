import React, { Component } from 'react';
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import styled from 'styled-components';
import firebase from '../firebase';

import {login} from '../../redux/actions/login'
import {logout} from '../../redux/actions/logout'


const provider = new firebase.auth.GoogleAuthProvider();


class SignIn extends Component{

    

    onSignIn = () => {
        firebase.auth().signInWithPopup(provider).then((result)=> {
            // This gives you a Google Access Token. You can use it to access the Google API.
            //const token = result.credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // send redux
            this.props.login(user);
            localStorage.setItem("userData", JSON.stringify(user));
            
          }).catch(function(error) {
            // Handle Errors here.
            /*
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            const credential = error.credential;
            // ...
            */
          });
    }

    onSignOut = () =>{
        this.props.logout();
        localStorage.removeItem("userData");
    }



 


    render(){
    
        return(
            <Div>
                {
                !this.props.loginData ?
                 (<Button onClick={()=>this.onSignIn()} red={this.props.red}>Sign In</Button>)
                :
                (<Button onClick={()=>this.onSignOut()}>Sign out</Button>)
                }
                
            </Div>
        );
    }
}




function mapStateToProps(state){
    return { loginData: state.login }
   }
   function mapDispatchToProps(dispatch) {
     return { 
       ...bindActionCreators({login,logout}, dispatch)
      }
   }

   export default connect(mapStateToProps, mapDispatchToProps)(SignIn);





const    Button = styled.button`
color: #69c469;
font-family:Raleway, sans-serif;
margin-right:15px;
font-size: 1.5em;
border: 0;
background-color:${props => props.red  ?"red" : "white"};
height:2.5rem;
width: 9rem;
border-radius:0.45rem;
:focus{
    outline:0
}
`;


const Div = styled.div`

display:flex;
align-items:center;
align-self: flex-end;
margin-left:auto;
height:100%;
`

