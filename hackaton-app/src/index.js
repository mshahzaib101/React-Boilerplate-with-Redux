import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';
import CustomRoutes from './Router';
// Firebase
var config = {
    apiKey: "AIzaSyCaFiWkY0Vo5jd85W36aQN9p5jJ0L5GxgQ",
    authDomain: "shahzaib-com-app4.firebaseapp.com",
    databaseURL: "https://shahzaib-com-app4.firebaseio.com",
    projectId: "shahzaib-com-app4",
    storageBucket: "shahzaib-com-app4.appspot.com",
    messagingSenderId: "559490986224"
  };
  firebase.initializeApp(config);
// Firebase

ReactDOM.render(<CustomRoutes />, document.getElementById('root'));
registerServiceWorker();
