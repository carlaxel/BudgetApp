import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import Toolbar from './components/Toolbar/Toolbar';
import Box from './components/Box';
import {bindActionCreators} from 'redux';
import { connect } from "react-redux";
import { login } from './redux/actions/login';
import { getFetch } from './functions/fetchFunctions';
import './css/App.css';




class App extends Component {



  componentWillMount(){
    let data = JSON.parse(localStorage.getItem("userData"));
    if(data){
      this.props.login(data);
    }
    

  }


async componentDidMount(){
  let data = await getFetch(`econdata?id=${this.props.userData.uid}`);
  let values = {...data.data.settings};
  let salary = values.salary;
  
  Object.keys(values).forEach((item)=>{
      if(item !== "salary"){
          values[item]=values[item]/salary*100;
      }
      
  })
  //this.setState({values});
  //this.props.econcat(data.data.settings);
}

  render() {
    

    return (
      <Div>
        
        <Toolbar/>
        <Box/>
        
      </Div>
    );
  }
}

const Div = styled.div`
display:flex;
flex-direction:column;
height: 100vh;
`;

function mapStateToProps(state){
  return { userData: state.login }
 }
 function mapDispatchToProps(dispatch) {
   return { 
     ...bindActionCreators({login}, dispatch)
    }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(App);




