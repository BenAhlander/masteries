import React, { Component } from 'react';
import '../css/nav.css'

class Nav extends React.Component {
  render() {
    return (
      <nav id="Nav">
          <button>Products</button>
          <button>Add Product</button>
      </nav>
    )
  }
}
export default Nav