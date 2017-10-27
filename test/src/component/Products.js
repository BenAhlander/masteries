import React, { Component } from 'react';
import axios from 'axios';
import '../css/products.css'

class Products extends Component {
    constructor() {
        super()
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3014/api/getproducts').then((res) => {
            this.setState({
                products: res.data
            })
        })
    }

    getproducts = () => {
        console.log('getproductes pressed')
        axios.get('http://localhost:3014/api/getproducts').then((res) => {
            console.log(res.data)
        })
    }

    render() {
        let products = this.state.products.map((elem, i) => {
            return (
                <div key={i} className="ProductCard">
                    <h3>{elem.item}</h3>
                    <p>{elem.price}</p>
                    <p>{elem.description}</p>
                    <div className="shoes">
                    </div>
                </div>
            )
        })
        return (
            <div>
                <h1>Products</h1>
                <div className="productCardContainer">
                    {products}
                </div>

            </div>
        )
    }
}

export default Products