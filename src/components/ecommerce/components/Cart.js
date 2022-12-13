import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CartItemCard from './CartItemCard'
import { EmptyCart } from '../Redux/Cart/CartAction'

const Cart = () => {
    const cartProducts =  useSelector((state)=> state.cart.cartItems)
    let totalAMount = 0
    const [error, setError]= useState('')
    const dispatch= useDispatch()
    cartProducts.forEach(item => {
        totalAMount+= item.amount
    } )
    const navigate= useNavigate()
    useEffect(()=> {
        setError('')
    }, [cartProducts])
    
    const checkOut=()=> {
        if (cartProducts.length){
            navigate('/ecom/page2')
        } else {
           setError('Your Cart is Empty')
        }
    }
    const emptyCart =()=> {
        dispatch(EmptyCart())
    }
  return (
    <div style={{width: '35%', display: 'inline-block', textAlign: 'center', border: '1px solid #bbb'}}>
        <div>
            <span> Cart Items </span>
            <span><button className='button' onClick={()=> emptyCart() }> Empty Cart </button> </span>
            <span> Total Items : {cartProducts.length} </span>
        </div>
        <table style={{margin: '10px'}} cellSpacing='10'>
            <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {
                    cartProducts.map((item, i) => {
                        return (
                            <CartItemCard key={i}  item ={item}/>
                        )
                    })
                }
            </tbody>
        </table>
        <div><button onClick={()=> checkOut()} className='button'> CheckOut </button> </div>
        <div className='danger'>{error}</div>
        <div> <span>Total Amount : Rs. {totalAMount}/- </span></div>
    </div>
  )
}

export default Cart