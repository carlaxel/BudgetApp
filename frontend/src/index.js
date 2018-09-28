import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers";
import thunk from 'redux-thunk'
import './css/index.css';
import './css/normalize.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  );

ReactDOM.render(
    <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
