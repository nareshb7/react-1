import React, { useState } from 'react';

const R_LoginForm = () => {
  const [loginData, setLoginData] = useState({
    mobile: '',
    password: '',
  });
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData, 'logindata');
  };
  return (
    <div>
      <h2>Login Form : </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="mobile"
            value={loginData.mobile}
            onChange={handleChange}
            placeholder="Enter mobile number here...."
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            placeholder="Enter password here...."
            required
          />
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};
export default R_LoginForm;
