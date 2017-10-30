import React, { Component } from 'react';
import '../css/nav.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const Nav = function(props){
    return (
      <nav id="Nav">
        <h4>{props.Prop}</h4>
          <Link to="/products"><button>Products</button></Link>
          <button>Add Product</button>
          <Link to='/theater'><button>Theater</button></Link>
      </nav>
    )
  }

export default Nav