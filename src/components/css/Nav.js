import React from 'react';
import { NavLink } from 'react-router-dom';

const CssNav = () => {
  return (
    <nav className="cssNav">
      <ul>
        <li>
          <NavLink to="textWriter">TextWriter</NavLink>
        </li>
        <li>
          <NavLink to="loader1"> Loader </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default CssNav;
