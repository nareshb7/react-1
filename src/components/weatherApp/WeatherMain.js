import React, { useState, useEffect, createContext } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import { Link, Outlet, useNavigate } from 'react-router-dom';

export const UserContext = createContext();
const WeatherMain = () => {
  const navigate = useNavigate();
  let previousData = JSON.parse(localStorage.getItem('Weather-Users'));
  const [userData, setUserData] = useState(previousData?.userData || {});
  const [users, setUsers] = useState(previousData?.users || []);
  let val = { userData, setUserData, users, setUsers };

  useEffect(() => {
    val = previousData;
    userData.hasOwnProperty('fName') ? navigate('welcomepage') : navigate('login');
  }, []);
  useEffect(() => {
    localStorage.setItem('Weather-Users', JSON.stringify(val));
  }, [val]);
  return (
    <UserContext.Provider value={val}>
      <div>
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};
export default WeatherMain;
