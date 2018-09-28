function login(state = "", action) {
 
    switch (action.type) {

      case 'ECON_UPDATE':
       
        return action.econData;
      
      default:
        return state;
    }
  }

  export default login;