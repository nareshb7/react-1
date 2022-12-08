import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [creds, setCreds] = useState({
    mobile: '',
    password: '',
  });
  const [loggedIn, isLoggedIn] = useState(false);
  const handleChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };
  const loginFunc = () => {
    console.log(creds, 'creds');
    navigate('/weatherapp/welcome');
  };
  return (
    <div>
      <div>
        <input
          type="text"
          name="mobile"
          value={creds.mobile}
          onChange={handleChange}
          placeholder="Enter Mobile Number"
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          value={creds.password}
          onChange={handleChange}
          placeholder="Enter Password"
        />
      </div>
      <div>
        <button onClick={loginFunc}>Log In</button>
        <div>
          If u don't have an account?{' '}
          <Link to="/weatherapp/signup"> Click Here</Link>{' '}
        </div>
      </div>
    </div>
  );
};
export default Login;
