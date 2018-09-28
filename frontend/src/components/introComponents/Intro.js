import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from "react-redux";
import styled from 'styled-components';
//import formik from 'formik';
import Question from './Question';
import SettingsIcon from './Settings';
import DisplayEconData from './DisplayEconData';

import { econdataupdate } from '../../redux/actions/econdataupdate';

class Intro extends Component{

    state={
        settings:false
    }

   async componentDidMount(){
        let res =  await fetch(`/econdata?id=${this.props.userData.uid}`);
        res = await res.json();
        this.props.econdataupdate(res.data);
    }

    handleOnClick = () => {
        
        if(this.state.settings){
            this.setState({settings:false})
        }else{
            this.setState({settings:true})
        }
        
    }


render(){
    return(
        <React.Fragment>
            <Div>
                <SettingsIcon handleOnClick={this.handleOnClick}/>
            </Div>
            {this.state.settings ? (<Question handleSave={this.handleOnClick}/>):(<DisplayEconData/>)}
            
        </React.Fragment>
    );
}
}



const Div = styled.div`
display:flex;
justify-content: flex-end;
`;


function mapStateToProps(state){
    return { userData: state.login,
            econData: state.econData,
            econCat: state.econCat
    }
   }
   function mapDispatchToProps(dispatch) {
     return { 
       ...bindActionCreators({econdataupdate}, dispatch)
      }
   }
  
   export default connect(mapStateToProps, mapDispatchToProps)(Intro);