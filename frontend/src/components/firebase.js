import firebase from 'firebase';


const config = {
    apiKey: "AIzaSyCsL08Llk9ShM59iJUyhZ9zueL3ihdFmSc",
    authDomain: "budgetappca.firebaseapp.com",
    databaseURL: "https://budgetappca.firebaseio.com",
    projectId: "budgetappca",
    storageBucket: "budgetappca.appspot.com",
    messagingSenderId: "760488299022"
  };
  firebase.initializeApp(config);

  export default firebase;