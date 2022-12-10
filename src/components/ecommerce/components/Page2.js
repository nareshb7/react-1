import React, { useEffect } from 'react'
import CheckOut from './CheckOut'
import Details from './Details'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const Page2 = () => {
  const cartProducts =  useSelector((state)=> state.cart.cartItems)
  const navigate  = useNavigate()
  useEffect( ()=> {
    if (!cartProducts.length){
      navigate('/ecom/page1')
      return
    }
  }, [cartProducts])
  return (
    <div style={{display: 'flex'}}>
        <Details />
        <CheckOut />
    </div>
  )
}

export default Page2