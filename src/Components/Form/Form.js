import React from 'react'
import axios from "axios"

class Form extends React.Component {
    constructor(){
        super();

        this.state={
            name: '',
            price: 0,
            imgUrl: ''
        }
    }

    handelChange = (e) =>{
        let {name} = e.target;
        this.setState({
            [name]: e.target.value,

        })
    }

    addInventory = () =>{
        const product_name=this.state.name
        const {price} = this.state
        let image_url = this.state.imgUrl
        if(image_url === ''){
            image_url ='http://maestroselectronics.com/wp-content/uploads/2017/12/No_Image_Available.jpg'
        }
        axios.post('/api/inventory',{product_name, price, image_url})
        .then(res =>{
            this.props.grabInventory()
        })
        .catch(err => alert(err, 'grabInventory'))
    }



    ClearState = () => {
        this.setState({
            name: '',
            price: 0,
            imgUrl: ''
        })
        document.getElementsByClassName('input-box')[0].value= ''
        document.getElementsByClassName('input-box')[1].value= ''
        document.getElementsByClassName('input-box')[2].value= ''
    }

    render(){
        let imgUrl = (this.state.imgUrl)? this.state.imgUrl : 'http://maestroselectronics.com/wp-content/uploads/2017/12/No_Image_Available.jpg';
        // console.log(this.state.name, this.state.price, this.state.imgUrl)
        return(
            <section id='form'>
                <img src={imgUrl} id='form-img' alt="no image available" />
                <h3>Image URL:</h3>
                <input type='text' 
                    name='imgUrl' 
                    className='input-box' 
                    onChange={e => this.handelChange(e)} 
                />
                <h3>Product Name</h3>
                <input type='text' 
                    name='name' 
                    className='input-box' 
                    onChange={e => this.handelChange(e)} 
                />
                <h3>Price:</h3>
                <input type='text' 
                    id="input3"
                    name='price' 
                    className='input-box' 
                    onChange={e => this.handelChange(e)} 
                />
                <button id='cancel' className='form-button' onClick={this.ClearState}>
                    Cancel
                </button>
                <button id='add-to-inventory' className='form-button' onClick={this.addInventory}>
                    Add to Inventory
                </button>
            </section>
        )
    }
}

export default Form