import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { UpdateUser } from './redux/Actions';
import R2_Form from './Form';

const R2_UpdateUser = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [response, setResponse] = useState('');
  const [data, setData] = useState(location.state);
  useEffect(() => {}, []);
  const handleSubmit = (updatedData) => {
    console.log(updatedData, 'dataupdated');
    setResponse('Data Updated');
    dispatch(UpdateUser(updatedData));
    navigate('/reduxexample/rexample2/re2home');
  };
  return (
    <div>
      Update form
      <R2_Form submitFunc={handleSubmit} data={data} />
    </div>
  );
};
export default R2_UpdateUser;
