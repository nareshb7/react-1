import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { EmptyCart } from '../Redux/Cart/CartAction'
import { LogOut } from '../Redux/UserData/Action'
import EditCurrentUser from './EditCurrentUser'

const MyAccount = () => {
  const currentUser = useSelector(state => state.data.currentUser)
  const navigate = useNavigate()
  useEffect(() => {
    if (!currentUser.hasOwnProperty('username')) {
      navigate('/ecom/login')
      return
    }
  }, [])

  const { username, email, mobile, password } = currentUser
  const dispatch = useDispatch()
  const logOutFunc = () => {
    dispatch(EmptyCart())
    dispatch(LogOut())
    navigate('/ecom/login')
  }
  const editFunc=(obj)=> {
    console.log('clicked', obj);
    navigate(`/ecom/edit/${JSON.stringify(obj)}`)
  }
  return (
    <div>
      <h3>Name : <em>{username}</em></h3>
      <h3>Mobile : <em> {mobile} </em></h3>
      <h3>Email : <em>{email}  </em></h3>
      <h3>Password : <em> {password}</em></h3>
      <div>
        <button className='button' onClick={()=> editFunc(currentUser)} > Edit </button>
        <button  onClick={() => logOutFunc()} className='button'> Log Out</button>
      </div>
      
    </div>
  )
}

export default MyAccount