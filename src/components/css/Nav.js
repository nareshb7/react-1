import React from 'react';
import { NavLink } from 'react-router-dom';

const CssNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="textWriter">TextWriter</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default CssNav;
