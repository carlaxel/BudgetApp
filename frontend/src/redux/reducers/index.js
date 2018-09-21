import { combineReducers } from 'redux'


function asyncData(state = {}, action){
    switch(action.type){
      case 'FETCHED_DATA':
        return action.data;
      default:
        return state;
    }
  }

export default combineReducers({asyncData})