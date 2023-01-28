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
          <NavLink to="loader1"> Loader1 </NavLink>
        </li>
        <li>
          <NavLink to="loader2"> Loader2 </NavLink>
        </li>
        <li>
          <NavLink to="loader3">Loader3 </NavLink>
        </li>
        <li>
          <NavLink to="btn1">Button 1 </NavLink>
        </li>
        <li>
          <NavLink to="btn2">Button 2</NavLink>
        </li>
        <li>
          <NavLink to="downloadbar1">Download Bar 1</NavLink>
        </li>
        <li>
          <NavLink to="voiceSearch1">VoiceSearch 1 </NavLink>
        </li>
        <li>
          <NavLink to="anim1">3D-Animation 1</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default CssNav;
