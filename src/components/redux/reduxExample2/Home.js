import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LogoutUser } from './redux/Actions';

const R2_Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [render, setRender] = useState(false);
  const currentUser = useSelector((state) => state.currentUser);
  useEffect(() => {
    if (!currentUser.hasOwnProperty('mobile')) {
      navigate('/reduxexample/rexample2/re2login');
    }
    console.log(currentUser, 'curentuser');
  }, [currentUser]);
  const logoutFunc = () => {
    dispatch(LogoutUser());
    setRender(!render);
  };
  const updateFunc = (data) => {
    navigate('/reduxexample/rexample2/re2updateuser', { state: data });
  };
  return (
    <div className="re2-home">
      <h1>Welcome {currentUser.name ? currentUser.name : 'User'}</h1>
      <div style={{ width: '400px', margin: 'auto', textAlign: 'start' }}>
        <h3>Account Details : </h3>
        <h4>
          Name: <span>{currentUser.name}</span>
        </h4>
        <h4>
          Mobile : <span>{currentUser.mobile}</span>
        </h4>
        <h4>
          Company: <span>{currentUser.company}</span>
        </h4>
        <h4>
          Role : <span>{currentUser.role}</span>
        </h4>
        <h4>
          Location : <span>{currentUser.location}</span>
        </h4>
        <h4>
          Password :{' '}
          <span>
            {currentUser.password?.slice(0, 2)}
            {''.padStart(currentUser.password?.length - 4, '*')}{' '}
            {currentUser.password?.slice(-2)}
          </span>
        </h4>
      </div>
      <div>
        <button onClick={() => updateFunc(currentUser)}>Update</button>
      </div>
      <div>
        <button onClick={logoutFunc}>LogOut</button>
      </div>
    </div>
  );
};
export default R2_Home;
