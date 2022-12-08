import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const SignUp = () => {
  const [data, setData] = useState({
    fName: '',
    lName: '',
    mobile: '',
    password: '',
  });
  const [loggedIn, isLoggedIn] = useState(false);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const signUpFunc = () => {
    alert('clicked');
    console.log(data, 'iptData');
  };
  return (
    <div>
      <div>
        <input
          type="text"
          name="fName"
          value={data.fName}
          onChange={handleChange}
          placeholder="First Name"
        />
      </div>
      <div>
        <input
          type="text"
          name="lName"
          value={data.lName}
          onChange={handleChange}
          placeholder="Last Name"
        />
      </div>
      <div>
        <input
          type="text"
          name="mobile"
          value={data.mobile}
          onChange={handleChange}
          placeholder="Mobile Number"
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          placeholder="Password"
        />
      </div>
      <div>
        <button onClick={signUpFunc}>SignUp</button>
      </div>
      <div>
        If u do have an account? <Link to="/weatherapp/login"> Click Here</Link>{' '}
      </div>
    </div>
  );
};
export default SignUp;
