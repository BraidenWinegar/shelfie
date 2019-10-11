import React from 'react'
import Product from '../Product/Product'

function Dashboard(props) {
    const products = props.inventory.map((e, i) =>{
        return <Product product_name={e.product_name} 
                price={e.price} 
                image_url={e.image_url} 
                key={i}
                grabInventory={props.grabInventory}/>
    })
    return(
        <div>
            <h1>Dashboard</h1>
    {products}
        </div>
    )
}

export default Dashboard