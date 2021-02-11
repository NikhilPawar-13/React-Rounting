import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter , Route, Switch} from 'react-router-dom'
import Mounting from './Mounting';
import Updating from './Updating';
import unMounting from './UnMounting'



ReactDOM.render(
  <React.StrictMode>
     
    <BrowserRouter>
        <h1>Component Life Cycle</h1>
        <App />
        <Switch>           
            <Route exact path='/' component =  {Mounting} />
            <Route path = '/updating' component = {Updating} />
            <Route path = '/unMounting' component = {unMounting} />           
        </Switch>
    
       
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
