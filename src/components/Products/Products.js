import React, { Component } from 'react';
import axios from 'axios';

import {Link} from 'react-router-dom';

import "./Products.css"

class Products extends Component {
    state = { 
        products : []
     }

     componentDidMount(){
        axios.get("https://practiceapi.devmountain.com/products").then(res=>{
            this.setState({products: res.data})
        })
    }

    render() { 
        let {products} = this.state
        console.log(products)
        let eachProduct = products.map((el, ind) => {
            return(
                <div key={el.id}>
                    <h3>{el.title}</h3>
                    <Link to={`/Details/${el.id}`}>
                        <img src={el.image} className="products--image"/> 
                    </Link>
                    <p>{el.price}</p>
                </div>
            )
        });
        return ( 
        <div>
            <h2>Products</h2>
            <div>
                {eachProduct}
            </div>
        </div> 
        );
    }
}
 
export default Products;