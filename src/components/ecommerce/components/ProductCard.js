import React from 'react'
import { useDispatch } from 'react-redux'
import { CartAction } from '../Redux/index'



const ProductCard = ({item, imgs}) => {
    const {id, iName, RAM, ROM, price, img} = item
    const dispatch = useDispatch()
   
    const cartObj = { 'id': id,'iName': iName, 'price': price, 'quantity': 1, 'amount': price}
  return (
      <div style={{textAlign: 'center', width: '30%', margin: '10px', display: 'inline-block', border: '1px solid #888', borderRadius: '10px'}} >
          <div><img src={img} alt='Mobile' width='200px' height='200px' /> </div>
          <div><h3> { iName }</h3></div>
          <div><span>RAM :  {RAM} </span><span> ROM : {ROM} </span></div>
          <div> Price : Rs<span>-{price}/-</span></div>
          <div><button onClick={() => dispatch(CartAction(cartObj))}  className='button'>Add to cart</button> </div>
      </div>
  )
}

export default ProductCard