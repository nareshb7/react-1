import React, { useState, useEffect, createContext } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import { Link, Outlet, useNavigate } from 'react-router-dom';

export const UserContext = createContext();
const WeatherMain = () => {
  const navigate = useNavigate();
  let previousData = JSON.parse(localStorage.getItem('WeatherUsers'));
  const [newUser, setIsNewUser] = useState(true);
  const [userData, setUserData] = useState(previousData?.userData || {});
  const [users, setUsers] = useState(previousData?.users || []);
  let val = { userData, setUserData, users, setUsers };

  useEffect(() => {
    val = previousData;
    newUser ? navigate('signup') : navigate('login');
  }, []);
  useEffect(() => {
    localStorage.setItem('WeatherUsers', JSON.stringify(val));
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
