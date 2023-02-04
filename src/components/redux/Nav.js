import React from 'react';
import { NavLink } from 'react-router-dom';

const ReduxNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="rexample1">Example 1 </NavLink>
        </li>
        <li>
          <NavLink to="rexample2">Example 2 </NavLink>
        </li>
        <li>
          <NavLink to="rexample3">Example 3 </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default ReduxNav;
