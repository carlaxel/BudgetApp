import { combineReducers } from 'redux'
import login from './login';
import econDataUpdate from './econDataUpdate';
import econcat from './econcat';




export default combineReducers({login,econDataUpdate,econcat});