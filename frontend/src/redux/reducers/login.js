function login(state = [], action) {

    switch (action.type) {

      case 'ADD_TODO':
        const copy = [...state];
        copy.push(action.login);
        return copy;
      // If no case is matched, just return the previous state, do not update this state
      default:
        return state;
    }
  }

  export default login;