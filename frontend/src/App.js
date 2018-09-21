import React, { Component } from 'react';
import styled from 'styled-components';
import Intro from './components/Intro'
import { connect } from "react-redux";
import firebase from './firebase';
import './App.css';




const Background = styled.div`
background-color: #ddffde;
width:100vw;
height:100vh;
padding: 20px;
`;

class App extends Component {




  

  render() {
    return (
     <Background>
      <Intro/>
     </Background>
    );
  }
}

export default App;
