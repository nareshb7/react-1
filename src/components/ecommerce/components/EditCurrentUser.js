import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { CurrentUser } from '../Redux'
import { useNavigate } from 'react-router-dom'
import { Update } from '../Redux/UserData/Action'



const EditCurrentUser = (props) => {
    const params = useParams()
    const user= JSON.parse(params.obj)
    const dispatch= useDispatch()
    const navigate = useNavigate()
    const [data,setData]= useState({
        username:user.username,
        mobile: user.mobile,
        password:user.password
    })
    const handleChange=(e)=> {
        setData({...data, [e.target.name]: e.target.value})
    }
    const handleSubmit= (e)=> {
        e.preventDefault()
        data.email = user.email
        dispatch(CurrentUser(data))
        dispatch(Update(data))
        navigate('/ecom/myaccount')
    }
  return (
    <div>
        <form className='ipStyle' onSubmit={handleSubmit}>
            <div>
                <input name='username' value={data.username} onChange={handleChange} />
            </div>
            <div>
                {/* <input name='email' value={data.email} onChange={handleChange} /> */}
            </div>
            <div>
                <input name='mobile' value={data.mobile} onChange={handleChange} />
            </div>
            <div>
                <input name='password' value={data.password} onChange={handleChange} />
            </div>
            <div>
                <button> Update </button>
            </div>
        </form>
    </div>
  )
}

export default EditCurrentUser