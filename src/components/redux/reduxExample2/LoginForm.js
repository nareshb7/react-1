import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LoginUser } from './redux/Actions';

const R_LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [render, setRender] = useState(true);
  const currentUser = useSelector((state) => state.currentUser);
  const [response, setResponse] = useState('');
  const [loginData, setLoginData] = useState({
    mobile: '',
    password: '',
  });
  useEffect(() => {
    if (currentUser) {
      if (currentUser.password == loginData.password) {
        setTimeout(() => {
          navigate('/reduxexample/rexample2/re2home');
        }, 2000);
        setResponse('Login Sucess, wait it will redrect to homepage');
      } else if (currentUser.mobile == loginData.mobile) {
        setResponse('Password wrong');
      }
    } else {
      setResponse('No user found');
    }
  }, [currentUser, render]);
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginUser(loginData));
    setRender(!render);
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
      <h3>Status : {response}</h3>
    </div>
  );
};
export default R_LoginForm;
