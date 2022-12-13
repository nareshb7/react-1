import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from './WeatherMain';

const SignUp = () => {
  const navigate = useNavigate();
  const { users, setUsers } = useContext(UserContext);
  const [data, setData] = useState({
    fName: '',
    lName: '',
    mobile: '',
    password: '',
  });
  const [error, setError] = useState('')
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const signUpFunc = () => {
    let isNew = users.find((user) => user.mobile == data.mobile);
    if (!isNew && data.mobile) {
      setUsers([...users, data]);
      navigate('/weatherapp/login');
    } else {
      setError('Mobile Number is Already Registred!.')
    }
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
      <div>{error}</div>
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
