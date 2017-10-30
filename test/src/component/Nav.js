import React, { Component } from 'react';
import '../css/nav.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'

class Nav extends React.Component {
  render() {
    console.log(this.props)
    return (
      <nav id="Nav">
        <h4>{this.props.Prop}</h4>
          <Link to="/products"><button>Products</button></Link>
          <button>Add Product</button>
          <Link to='/theater'><button>Theater</button></Link>
      </nav>
    )
  }
}
export default Nav