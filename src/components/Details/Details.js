import React, {Component} from 'react';
import axios from 'axios';

class Details extends Component {
    state = { 
        product: {}
     }

     componentDidMount(){
         axios.get(`https://practiceapi.devmountain.com/products/${
            this.props.match.params.id
          }`).then((res) => {
              this.setState({product: res.data})
          })
     }

    render() { 
        let {product} = this.state
        return ( 
        <div>
            <h2>Details Page</h2>
            <h3>{product.title}</h3>
            <img src={product.image} width="300px"/>
            <p>{product.price}</p>
        </div> 
        );
    }
}
 
export default Details;


