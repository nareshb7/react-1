import React, { useState, useEffect, createContext } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import { Link, Outlet, useNavigate } from 'react-router-dom';

export const UserContext = createContext();
const WeatherMain = () => {
  const [newUser, setIsNewUser] = useState(true);
  const [userData, setUserData] = useState({
    fName: '',
    lName: '',
    mobile: '',
    password: '',
  });
  const navigate = useNavigate();
  useEffect(() => {
    newUser ? navigate('signup') : navigate('login');
  }, []);
  return (
    <UserContext.Provider value={userData}>
      <div>
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};
export default WeatherMain;
