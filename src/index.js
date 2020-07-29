import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import  {Route, BrowserRouter as Router} from 'react-router-dom'; 
import LoginComponent from './Login/login';
import SignupComponent from './Signup/signup';
import DashboardComponent from './Dashboard/dashboard';

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyDYWpP2nRNQCeOAL4SlbqGyTnyfJ4G2b3E",
  authDomain: "pingme-c2c0d.firebaseapp.com",
  databaseURL: "https://pingme-c2c0d.firebaseio.com",
  projectId: "pingme-c2c0d",
  storageBucket: "pingme-c2c0d.appspot.com",
  messagingSenderId: "176096294471",
  appId: "1:176096294471:web:fd3800b06d102b6ccd6362",
  measurementId: "G-992CJMKWEB"
});

const routing = (
  <Router>
    <div id="routing-container">
      <Route path='/login' component={LoginComponent}></Route>
      <Route path='/signup' component={SignupComponent}></Route>
      <Route path='/dashboard' component={DashboardComponent}></Route>
    </div>
  </Router>
);

ReactDOM.render(
    routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
