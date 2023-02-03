import React, { useState } from 'react';

const R_UserForm = () => {
  const [userdata, setUserData] = useState({
    name: '',
    mobile: '',
    role: '',
    company: '',
    location: '',
    password: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userdata, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userdata, 'userdata');
  };
  return (
    <div>
      <h2>User Form </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={userdata.name}
            onChange={handleChange}
            placeholder="Enter name here..."
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="mobile"
            value={userdata.mobile}
            onChange={handleChange}
            placeholder="Enter mobile number here..."
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="role"
            value={userdata.role}
            onChange={handleChange}
            placeholder="Enter role here..."
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="company"
            value={userdata.company}
            onChange={handleChange}
            placeholder="Enter company name here..."
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="location"
            value={userdata.location}
            onChange={handleChange}
            placeholder="Enter location here..."
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="password"
            value={userdata.password}
            onChange={handleChange}
            placeholder="Enter password here..."
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default R_UserForm;
