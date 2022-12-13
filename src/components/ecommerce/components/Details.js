import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const Details = () => {
    const navigate = useNavigate()
    const mblPattern =/^[0-9]{10}$/
    const [userdata, setUserdata] = useState({
        fName: '', lName: '', email: '', mNumber: '', adrs1: '', adrs2: '', city: '', zCode: '', pMode: 'Cash', state: 'TS'
    })
    const handleChange = (e) => {
        const {name, value}= e.target

        setUserdata({ ...userdata, [name]: value })
    }
    const handleSubmit = (e) => {
        document.getElementById('form1').reset()
        e.preventDefault()
        navigate(`/ecom/bill/${JSON.stringify(userdata)}`)
       //navigate(`/${JSON.stringify(userdata)}`)
    }
    return (
        <div style={{ width: '65%' }}>
            <form className='userDetails' onSubmit={handleSubmit} id='form1'>
                <div>
                    <div><label>First Name : </label></div>
                    <input type='text' placeholder='First Name' name='fName' value={userdata.fName} onChange={handleChange}  required/>
                </div>
                <div>
                    <div><label>Last Name : </label></div>
                    <input type='text' placeholder='Last Name' name='lName' value={userdata.lName} onChange={handleChange} required/>
                </div>
                <div>
                    <div><label>Email : </label></div>
                    <input type='text' placeholder='Email Id ' name='email' value={userdata.email} onChange={handleChange} required/>
                </div>
                <div>
                    <div><label>Mobile : </label></div>
                    <input type='number' placeholder='Mobile Number' name='mNumber' value={userdata.mNumber} onChange={handleChange} required pattern={mblPattern} />
                </div>
                <div>
                    <div><label>Address 1 : </label></div>
                    <input type='text' placeholder='Address 1' name='adrs1' value={userdata.adrs1} onChange={handleChange} required />
                </div>
                <div>
                    <div><label>Address 2 : </label></div>
                    <input type='text' placeholder='Address 2' name='adrs2' value={userdata.adrs2} onChange={handleChange} required/>
                </div>
                <div>
                    <div><label>City : </label></div>
                    <input type='text' placeholder='City Name' name='city' value={userdata.city} onChange={handleChange} required/>
                </div>
                <div>
                    <div><label>State : </label></div>
                    <select defaultValue={userdata.state} onChange={(e) => setUserdata({ ...userdata, state: e.target.value })}>
                        <option value='TS'>Telangana</option>
                        <option value='AP'>Andhra Pradesh</option>
                        <option value='TN'>TamilNadu</option>
                        <option value='KA'>Karnataka</option>
                    </select>
                </div>
                <div>
                    <div><label>ZIP Code : </label></div>
                    <input type='number' placeholder='ZIP Code' name='zCode' value={userdata.zCode} onChange={handleChange} required/>
                </div>
                <div>
                    <div><label>Payment Mode: </label></div>
                    <select defaultValue={userdata.pMode} onChange={(e) => setUserdata({ ...userdata, pMode: e.target.value })}>
                        <option value='Card'>Card</option>
                        <option value='Cash'>Cash</option>
                        <option value='UPI'>UPI</option>
                    </select>
                </div>
                <div>
                    <button type='submit'>Place order</button>
                </div>
                <div>
                    <button onClick={() => navigate('/ecom/page1')}>Continue Shopping</button>
                </div>
            </form>
        </div>
    )
}

export default Details