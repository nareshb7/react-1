import React, { useState, useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from './WeatherMain';

const Login = () => {
  const { users, setUserData } = useContext(UserContext);
  const [isHide, setIsHide] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [creds, setCreds] = useState({
    mobile: '',
    password: '',
  });
  const handleChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };
  const loginFunc = () => {
    let obj = users.filter((val) => val.mobile === creds.mobile);
    if (obj[0]?.mobile) {
      if (obj[0]?.password == creds.password) {
        setUserData(obj[0]);
        navigate('/weatherapp/welcomepage');
      } else {
        setError('Password Not Matching');
      }
    } else {
      setError('Data Not Found');
    }
  };
  const hideShow = () => {
    setIsHide(!isHide);
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
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <input
          type={isHide ? 'password' : 'text'}
          name="password"
          value={creds.password}
          onChange={handleChange}
          placeholder="Enter Password"
        />
        <span
          className={isHide ? 'fa fa-eye-slash' : 'fa fa-eye'}
          onClick={hideShow}
          style={{
            position: 'absolute',
            fontSize: '24px',
            top: '15px',
            right: '5%',
          }}
        ></span>
      </div>
      <div>{error}</div>
      <div>
        <button onClick={loginFunc}>Log In</button>
        <div>
          If u don't have an account?{' '}
          <Link to="/weatherapp/signup"> Click Here</Link>{' '}
        </div>
        <div>
          <Outlet />{' '}
        </div>
      </div>
    </div>
  );
};
export default Login;
