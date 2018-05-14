import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import firebase from 'firebase/app';
import 'firebase/database';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCrFMXIoxM4N4n4MT5ZbxLRaA_MrZCapIk",
    authDomain: "portfolio-11385.firebaseapp.com",
    databaseURL: "https://portfolio-11385.firebaseio.com",
    projectId: "portfolio-11385",
    storageBucket: "portfolio-11385.appspot.com",
    messagingSenderId: "641881009867"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
