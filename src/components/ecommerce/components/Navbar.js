import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => {
  const currentUser = useSelector((state) => state.data.currentUser);

  return (
    <div>
      <nav className="navPage">
        <ul>
          <li>
            <img src="#" alt="" />
          </li>
          <li>
            <h2>Trend</h2>{' '}
          </li>
          <li>
            <NavLink to="page1"> Products</NavLink>{' '}
          </li>
          <li>
            <NavLink to="page2"> CheckOut </NavLink>{' '}
          </li>
          <li>
            <NavLink to="signup">SignUp</NavLink>{' '}
          </li>
          <li>
            <NavLink to="login">Log In</NavLink>{' '}
          </li>
          <li>
            <NavLink to="myaccount"> My Account </NavLink>{' '}
          </li>
          <li> {currentUser['username']}</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
