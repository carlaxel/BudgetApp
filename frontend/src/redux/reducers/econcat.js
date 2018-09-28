function econcat(state = [], action) {
  
    switch (action.type) {

      case 'ECON_CAT':
       
        return action.econcat;
      
      default:
        return state;
    }
  }

  export default econcat;