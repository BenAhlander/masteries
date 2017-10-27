import React, { Component } from 'react';
import '../css/nav.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'

class Nav extends React.Component {
  render() {
    return (
      <nav id="Nav">
          <Link to="/products"><button>Products</button></Link>
          <button>Add Product</button>
          <Link to='/theater'><button>Theater</button></Link>
      </nav>
    )
  }
}
export default Nav