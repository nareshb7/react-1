import React, { useState } from 'react';

const Login = () => {
  const [creds, setCreds] = useState({
    mobile: '',
    password: '',
  });
  const handleChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };
  const loginFunc = () => {
    console.log(creds, 'creds');
    alert('clicked');
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
      </div>
    </div>
  );
};
export default Login;
