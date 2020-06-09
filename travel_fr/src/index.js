import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import Welcome from './Welcome';
import * as serviceWorker from './serviceWorker';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

let component;
let userId = false;
// let userId = Cookies.load("userId");
cookies.set('isLogedIn', true, { path: '/' });
console.log(cookies.get('myCata'))
if (cookies.get('isLogedIn')){
  component =
  <React.StrictMode>
    <App />
  </React.StrictMode>
} else{
  component =
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>
}

ReactDOM.render(
  component, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
