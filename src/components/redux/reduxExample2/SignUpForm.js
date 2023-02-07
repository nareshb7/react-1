import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddUser } from './redux/Actions';
import R2_Form from './Form';

const R_UserForm = () => {
  const dispatch = useDispatch();
  const [response, setResponse] = useState('');
  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log(e, 'userData');
    dispatch(AddUser(e));
    setResponse('Data added sucessfully');
  };
  return (
    <div>
      <h2>User Form </h2>
      <R2_Form submitFunc={handleSubmit} />
      <h3>Status : {response}</h3>
    </div>
  );
};
export default R_UserForm;
