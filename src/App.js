import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';

export default class App extends React.Component {
  
  
  render(){
  return (
    <div className="App">           
        <Link className = "link" to='/'>Mounting</Link>
        <Link className = "link" to ='/updating'>Updating</Link>
        <Link className = "link" to='/unMounting'>UnMounting</Link>     
    </div>
  )
  }
}

