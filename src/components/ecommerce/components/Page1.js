import React, { useEffect, useState } from 'react'
import Cart from './Cart'
import Products from './Products'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Search from './searchBar/Search'
import Navbar from './Navbar'


const Page1 = () => {
  const currentUser= useSelector(state => state.data.currentUser)
    const navigate= useNavigate()
    const [sData, setData]= useState()
    useEffect( ()=> {
      if (!currentUser.hasOwnProperty('username')){
        navigate('/ecom/login')
        return
      }
    }, [currentUser])
    const sProducts =(data)=> {
      setData(data)
    }
  return (
    <div>
  
      <Search items ={sProducts} />
      <div style={{display:'flex'}} >
      <> <Products sProducts={sData} /><Cart /></> 
      </div>
    </div>
  )
}

export default Page1