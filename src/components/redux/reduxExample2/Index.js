import React from 'react';
import R_UserForm from './SignUpForm';
import { NavLink, Outlet } from 'react-router-dom';

const ReduxEx_2 = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="re2signup">SignUp form</NavLink>
          </li>
          <li>
            <NavLink to="re2login">Login Form</NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default ReduxEx_2;
