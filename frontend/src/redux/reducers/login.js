function login(state = "", action) {
 
    switch (action.type) {

      case 'LOGIN':
       
        return action.login;
      case 'LOGOUT':
       
        return action.logout;
      // If no case is matched, just return the previous state, do not update this state
      default:
        return state;
    }
  }

  export default login;