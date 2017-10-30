import React, { Component } from 'react';
import axios from 'axios';
import '../css/products.css';
import { getSearch } from '../Redux/reducer'
import { connect } from 'react-redux';

class Products extends Component {
    constructor() {
        super()
        this.state = {
            products: []
        }

        this.getproducts = this.getproducts.bind(this)
    }

    componentDidMount() {
        axios.get('http://localhost:3014/api/getproducts').then((res) => {
            this.setState({
                products: res.data
            })
        })
        console.log(this.props)

    }

    getproducts() {
        console.log('getproductes pressed')
        axios.get('http://localhost:3014/api/getproducts').then((res) => {
            console.log(res.data)
        })
    }

    updateReduxThing(input) {
        this.props.getSearch(input)
        console.log(this.props.search)
    }

    render() {

        const jeff = require('../jeff.c7ff7e4f.jpg')

        console.log('MATCH', this.props.match)

        let products = this.state.products.map((elem, i) => {
            return (
                <div key={i} className="ProductCard">
                    <section>
                        <h3 style={{ color: 'navy' }}>{elem.item}</h3>
                        <ul>
                            <li>{elem.price}</li>
                            <li>{elem.description}</li>
                        </ul>
                    </section>
                    <div className={elem.item} />
                </div>
            )
        })
        return (
            <div>
                <h1>Products</h1>
                <a href="https://www.w3schools.com">Visit W3Schools</a>
                <input onChange={e => this.updateReduxThing(e.target.value)}></input>
                <h5>{`This is on redux "${this.props.search}"`}</h5>
                <h4>{`this.props.match says you are visiting ${this.props.match.path}`}</h4>

                <div className="jeff"><img src={jeff} style={{ width: '80px', height: '80px;', marginTop: '10px' }} /></div>
                {/* <h5>{this.props.match.url}</h5> */}
                <div className="productCardContainer">
                    {products}
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}



export default connect(mapStateToProps, { getSearch })(Products)



//Web sematnics is basically an agreed upon way to format data in on the web. this way its easier for developers to
// read and understand other peoples code.

//Custom: this is when you make up your own semantics

//The goal of web semantics is to coding for the web better and easier. 

//The purpose web sematnics serves is that it helps web developers understand and read other peoples code better.

//best practies include things like descriptive tags, like <nav> </nav> instead of <div> </div>. This will help the 
//reader/developer more easily understanding what is happening.

//Doctypes declaration is not an HTML tag. The doctype is an instruction to the browser about what version of html the page
// written in.