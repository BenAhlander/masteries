import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './component/Products';
import Nav from './component/Nav';
import Router from './router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="content">
          {Router}
        </div>
      </div>
    );
  }
}

export default App;
