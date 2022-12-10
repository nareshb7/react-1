import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CurrentUser } from '../Redux/index'

const Login = () => {
    const [data,setData]=  useState({
        email: '',
        password: ''
    })
    
    let [errors, setErrors]= useState({})
    const dispatch=  useDispatch()
    const navigate = useNavigate()
    const users = useSelector((state)=> state.data.users)
    const currentUser= useSelector(state=> state.data.currentUser)
    useEffect(()=> {
        if (currentUser.hasOwnProperty('username')){
            navigate('/ecom/myaccount')
        }
    }, [])
    const handleChange =(e)=> {
        setData({...data, [e.target.name]: e.target.value})
    }
    
    const handleSubmit =(e)=> {
        e.preventDefault()
        let sysData;
        errors={}
        users.forEach( user=> {
            if (user.email === data.email) {
                sysData= user
            }
        })
        if (sysData){
            if (data.password=== sysData.password) {
                dispatch(CurrentUser(sysData))
                alert('LogIn Sucessfully')
                navigate('/ecom/page1')
            } else {
                errors.password= 'Password Not Matching'
            }  
        } else {
            errors.username = 'UserNot Found'
        }
        setErrors({...errors})
    }
    
  return (
    <div>
        <div>
            <form className='ipStyle' onSubmit={handleSubmit}>
                <div>
                    <div><label>Email: </label></div>
                    <input type='text' name='email' placeholder='Enter your Email Id' value={data.email} onChange={handleChange}  />
                    <div className='danger'> {errors.username}</div>
                </div>
                <div>
                    <div><label>Password: </label></div>
                    <input type='password' name='password' placeholder='Enter your password' value={data.password} onChange={handleChange} />
                    <div className='danger'> {errors.password}</div>
                </div>
                <div>
                    <button> Log In</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login