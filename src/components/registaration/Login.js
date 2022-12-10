import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const userdata = useSelector((state) => state.users.users);
  const [error, setError] = useState({ user: '', psd: '' });
  const navigate = useNavigate();
  const [data, setData] = useState({ email: '', psd: '' });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const previousData = () => {
    let obj;
    userdata.map((user) => {
      if (data.email == user.email) {
        obj = user;
        return;
      }
    });
    return obj;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userObj = previousData();
    if (userObj) {
      data.psd === userObj.psd
        ? navigate(`/home/welcome/${JSON.stringify(userObj)}`)
        : setError({ ...error, psd: 'Password Not Matching', user: '' });
    } else {
      setError({ ...error, user: 'User Not Found', psd: '' });
    }
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <label>Email: </label>{' '}
            </div>
            <div>
              <input
                type="text"
                name="email"
                placeholder="Enter your Mail"
                value={data.email}
                onChange={handleChange}
              />{' '}
            </div>
            <div>{error.user}</div>
          </div>
          <div>
            <div>
              <label>Password: </label>{' '}
            </div>
            <div>
              <input
                type="password"
                name="psd"
                placeholder="Enter your Password"
                value={data.psd}
                onChange={handleChange}
              />{' '}
            </div>
            <div>{error.psd}</div>
          </div>
          <div>
            <button>Log In</button>{' '}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
