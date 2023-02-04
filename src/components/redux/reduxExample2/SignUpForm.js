import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddUser } from './redux/Actions';

const R_UserForm = () => {
  const dispatch = useDispatch();
  const [response, setResponse] = useState('');
  const [userData, setUserData] = useState({
    name: '',
    mobile: '',
    role: '',
    company: '',
    location: '',
    password: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData, 'userData');
    dispatch(AddUser(userData));
    setResponse('Data added sucessfully');
  };
  return (
    <div>
      <h2>User Form </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            placeholder="Enter name here..."
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="mobile"
            value={userData.mobile}
            onChange={handleChange}
            placeholder="Enter mobile number here..."
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="role"
            value={userData.role}
            onChange={handleChange}
            placeholder="Enter role here..."
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="company"
            value={userData.company}
            onChange={handleChange}
            placeholder="Enter company name here..."
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="location"
            value={userData.location}
            onChange={handleChange}
            placeholder="Enter location here..."
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="Enter password here..."
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <h3>Status : {response}</h3>
    </div>
  );
};
export default R_UserForm;
