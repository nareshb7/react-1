import React from 'react'
import { data } from './Data'
import ProductCard from './ProductCard'

const Products = ({sProducts}) => {
    let products;
    let error;
    if (sProducts){
        if (sProducts.length){
            products = JSON.parse(JSON.stringify(sProducts))
        } else {
            error='No result found'
            products=[]
        }
        //sProducts.length ? products = JSON.parse(JSON.stringify(sProducts)): (error='No result found', products=[]);
    } else {
       products = JSON.parse(JSON.stringify(data))
    }
    
  return (
    <div style = {{width: '75%', display: 'inline-block'}}>
        <div className='danger' style={{textAlign: 'center', fontSize: '25px'}}>{error}</div>
        <div >
            {
                products.map( (product, i) => {
                    return (
                        <ProductCard key={i} item ={product}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Products