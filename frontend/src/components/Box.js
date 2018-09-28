import React, { Component, Fragment } from 'react';
import Intro from './introComponents/Intro';
import Please from './Please';



import {bindActionCreators} from 'redux';
import { connect } from "react-redux";
import {login} from '../redux/actions/login';

import styled from 'styled-components';





class Box extends Component {
    
render(){

console.log(this.props);
    const{ userData } = this.props;

    return(
        <Div>
            {!userData ? (<Please/>):(<Intro/>)}
        </Div>
    );
}
}

const Div = styled.div`
width: 96vw;
height: 100%;
margin-top:20px;
margin-bottom:30px;
align-self:center;
background-color:white;
border-radius:15px;
display:flex;
flex-direction:column;

/*box-shadow: 0 0 10px;*/

`;



function mapStateToProps(state){
    return { userData: state.login }
   }
   function mapDispatchToProps(dispatch) {
     return { 
       ...bindActionCreators({login}, dispatch)
      }
   }
  
   export default connect(mapStateToProps, mapDispatchToProps)(Box);
