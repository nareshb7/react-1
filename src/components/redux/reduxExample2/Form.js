import React, { useState, useEffect } from 'react';

const R2_Form = ({ submitFunc, data }) => {
  const [userData, setUserData] = useState({
    name: '',
    mobile: '',
    role: '',
    company: '',
    location: '',
    password: '',
  });
  useEffect(() => {
    if (data && data.hasOwnProperty('mobile')) {
      setUserData(data);
    }
  }, [data]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    submitFunc(userData);
  };
  return (
    <div>
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
    </div>
  );
};
export default R2_Form;
