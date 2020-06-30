import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from "react-helmet";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/font-awesome/css/font-awesome.min.css'

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <meta charSet={"utf-8"}/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <title>Web3 Boilerplate</title>
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
