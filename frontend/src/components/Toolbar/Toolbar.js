import React, { Component } from 'react';
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import styled from 'styled-components';
import SignIn from './SignIn';





class Toolbar extends Component{

    render (){
        const { userData } = this.props;
        if(window.innerWidth>500){
            return(
                <Div>
                    {userData &&
                    <React.Fragment>
                    <Img src={userData.photoURL}/>
                    <Name>{userData.displayName}</Name>
                    </React.Fragment>
                    }
                    
                    <SignIn />
                </Div>
            );
        }else{
            return(
                <Div>
                    {userData &&
                    <React.Fragment>
                    <Img src={userData.photoURL} />
                    </React.Fragment>
                    }
                    
                    <SignIn />
                </Div>
            );
        }
        
    }


}

function mapStateToProps(state){
    return { userData: state.login }
   }
   function mapDispatchToProps(dispatch) {
     return { 
       ...bindActionCreators({}, dispatch)
      }
   }

   export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);


const Div = styled.div`
height:60px;
width: 100vw;
box-shadow: 0px -2px 25px;
background-color: darkseagreen;
display:flex;

`;

const Name = styled.div`
align-self: center;
font-family: Raleway,sans-serif;
color: white;
font-size: 1.6rem;
margin-left: 0.5rem;
`;

const Img = styled.img`

border-radius:50%;
align-self: center;
width:42px;
height: 42px;
margin-left: 15px;
margin-right: 15px;
border: 2px solid white;

`;