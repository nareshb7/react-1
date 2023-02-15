import React from 'react';
import { NavLink } from 'react-router-dom';
const ExampleNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="ex">Ex </NavLink>
        </li>
        <li>
          <NavLink to="ex1">Ex1 </NavLink>
        </li>
        <li>
          <NavLink to="ex2">Ex2 </NavLink>
        </li>
        <li>
          <NavLink to="ex3">Ex3 </NavLink>
        </li>
        <li>
          <NavLink to="ex4">Ex4 </NavLink>
        </li>
        <li>
          <NavLink to="ex5">Ex5 </NavLink>
        </li>
        <li>
          <NavLink to="ipadrs">Ip Address </NavLink>
        </li>
        <li>
          <NavLink to="localip">Local IP Adress </NavLink>
        </li>
        <li>
          <NavLink to="Palindrome">Palindrome </NavLink>
        </li>
        <li>
          <NavLink to="checkboxex">CheckBox Ex </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default ExampleNav;
