import React from 'react'

class Form extends React.Component {
    constructor(){
        super();

        this.state={
            name: '',
            price: 0,
            imgUrl: ''
        }
    }

    render(){
        let imgUrl = (this.state.imgUrl)? this.state.imgUrl : 'http://maestroselectronics.com/wp-content/uploads/2017/12/No_Image_Available.jpg';
        return(
            <section id='form'>
                <img src={imgUrl} />
                <h3>Image URL:</h3>
                <input type='text' className='input-box'/>
                <h3>Product Name</h3>
                <input type='text' className='input-box'/>
                <h3>Price:</h3>
                <input type='text' className='input-box'/>
                <button id='cancel' className='form-button'>
                    Cancel
                </button>
                <button id='add-to-inventory' className='form-button'>
                    Add to Inventory
                </button>
            </section>
        )
    }
}

export default Form