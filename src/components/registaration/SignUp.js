import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { AddUser } from '../../redux/userdata/UserAction'
import { useDispatch } from 'react-redux'

const Signup = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [data, setData] = useState({username: '',email: '',mobile: '',psd: '',conPsd: ''})
    const [errors, setErrors] = useState({username: '.',email: '.',mobile: '.',psd: '.',conPsd: '.'})
    const [valid, setValid] = useState(false)
    const mailPattern = /^[a-z][a-z0-9!@#$%^&*._]+@[a-z]{2,}(?:[.][a-z]{2,})+$/
    const mblPattern = /^[0-9]{10}$/
    const psdPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*,_]).{8,}/
    const psdError = 'Minmum 8 Characters required,(Uppercase, lowercase, digit, character)'

    const danger = { color: 'red', fontSize: "20px" }

    useEffect(()=>{
        const { username, email, mobile, psd, conPsd}= errors
        !username && !email && !mobile && !psd && !conPsd ? setValid(true) : setValid(false)
    },[data])
   
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        const { name, value } = e.target
        switch (name) {
            case 'username': 
                value.length > 3 ? (setErrors({ ...errors, [name]: '' })) : (setErrors({ ...errors, [name]: 'More than 3 Characters required' }))
                break;
            case 'email':
                value.match(mailPattern) ? (setErrors({ ...errors, [name]: '' })) : (setErrors({ ...errors, [name]: 'Enter Valid Mail' }))
                break;
            case 'mobile': 
                value.match(mblPattern) ? (setErrors({ ...errors, [name]: '' })) : (setErrors({ ...errors, [name]: 'Must be 10 digits' }))
                break;
            case 'psd':
                value.match(psdPattern) ? (setErrors({ ...errors, [name]: '' })):(setErrors({ ...errors, [name]: psdError }))
                break;
            case 'conPsd':
                value=== data.psd  ? (setErrors({ ...errors, [name]: '' })):(setErrors({ ...errors, [name]: 'Password Not matched' }))
                break;
            default: return
        }
       
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Thank you ${data.username}, Your details submitted`)
        dispatch(AddUser(data))
        navigate('/home/login')

    }
 
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <div><label>Name : </label></div>
                    <div><input type='text' required placeholder='Enter Name' name='username' value={data.username} onChange={handleChange} /> </div>
                    <div style={danger} >{errors.username} </div>
                </div>
                <div>
                    <div><label>Email : </label></div>
                    <div><input type='text' required placeholder='Enter Email' name='email' value={data.email} onChange={handleChange} /> </div>
                    <div style={danger} >{errors.email} </div>
                </div>
                <div>
                    <div><label>Mobile : </label></div>
                    <div><input type='number' required placeholder='Enter Mobile' name='mobile' value={data.mobile} onChange={handleChange} /> </div>
                    <div style={danger} >{errors.mobile} </div>
                </div>
                <div>
                    <div><label>Password : </label></div>
                    <div><input type='password' placeholder='Enter Password' name='psd' value={data.psd} onChange={handleChange} /> </div>
                    <div style={danger} >{errors.psd} </div>
                </div>
                <div>
                    <div><label>Confrim Password : </label></div>
                    <div><input type='password' required placeholder='Enter Confrim Password' name='conPsd' value={data.conPsd} onChange={handleChange} /> </div>
                    <div style={danger} >{errors.conPsd} </div>
                </div>
                <div><button disabled={!valid} > SignUp </button> </div>
            </form>
        </div>
    )
}

export default Signup