import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from "react-redux";
import styled from 'styled-components';
import IconSetting from '../../svg/controls.js';

import { econdataupdate } from '../../redux/actions/econdataupdate';


class Settings extends Component{

    

    render(){
        return(
            <IconSetting handleOnClick={this.props.handleOnClick}/>
        );
    }

}

function mapStateToProps(state){
    return { userData: state.login,
            econData: state.econData
    }
   }
   function mapDispatchToProps(dispatch) {
     return { 
       ...bindActionCreators({econdataupdate}, dispatch)
      }
   }
  
   export default connect(mapStateToProps, mapDispatchToProps)(Settings);