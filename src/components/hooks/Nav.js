import React from 'react';
import { NavLink } from 'react-router-dom';

const HooksNav = () => {
  return (
    <nav>
      <h2>React Hooks : </h2>
      <ul>
        <li>
          <NavLink to="useReducer">Use Reducer</NavLink>
        </li>
        <li>
          <NavLink to="useRef">Use Ref</NavLink>
        </li>
        <li>
          <NavLink to="usememo">Use Memo</NavLink>
        </li>
        <li>
          <NavLink to="usecontext">Use Context</NavLink>
        </li>
        <li>
          <NavLink to="usecallback">Use Callback </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default HooksNav;
