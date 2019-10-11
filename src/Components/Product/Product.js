import React from 'react'
import './Product.css';
import axios from 'axios';



class Product extends React.Component {
    
    deleteProduct =() =>{

        axios.delete(`/api/inventory/${this.props.key}`)
        .then(res =>{
            this.props.grabInventory()
        })
        .catch(err => alert(err, 'deletProducty'))
    }

    render(){
        return(
            <div>
                <img className='product-img' src={this.props.image_url} />
                <div>{this.props.product_name}</div>
                <div>${this.props.price}</div>
                <div>
                    <button onClick={this.deleteProduct}>Delete</button>
                    <button>Edit</button>
                </div>
            </div>
        )
    }
}


export default Product