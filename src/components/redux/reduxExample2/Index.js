import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import R_UserForm from './SignUpForm';
import { R2_Store } from './redux/Store';

const ReduxEx_2 = () => {
  return (
    <Provider store={R2_Store}>
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
    </Provider>
  );
};
export default ReduxEx_2;
