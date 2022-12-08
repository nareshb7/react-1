import React from 'react';
import { NavLink } from 'react-router-dom';
const Nav = () => {
  return (
    <nav>
      <ul className="navPage">
        <li className="navPage">
          <NavLink to="/">Home</NavLink>{' '}
        </li>
        <li className="navPage">
          <NavLink to="/about">About</NavLink>{' '}
        </li>
        <li className="navPage">
          <NavLink to="/contact">Add Contact </NavLink>
        </li>
        <li>
          <NavLink to="clientslist">Contact List </NavLink>
        </li>
        <li>
          <NavLink to="table">Table</NavLink>{' '}
        </li>
        <li>
          <NavLink to="store"> Store </NavLink>
        </li>
        <li>
          <NavLink to="comp1"> Nested Comp and Context </NavLink>
        </li>
        <li>
          <NavLink to="clothhome"> ClothHome </NavLink>
        </li>
        <li>
          <NavLink to="reduxexample"> Redux </NavLink>
        </li>
        <li>
          <NavLink to="example">Examples </NavLink>
        </li>
        <li>
          <NavLink to="reusable">Reusable </NavLink>
        </li>
        <li>
          <NavLink to="progressbar">Progress Bar</NavLink>
        </li>
        <li>
          <NavLink to="calculator">Calculator</NavLink>
        </li>
        <li>
          <NavLink to="emiCalculator">Emi Calculator</NavLink>
        </li>
        <li>
          <NavLink to="speedCalculator">Speed Calculator</NavLink>
        </li>
        <li>
          <NavLink to="stopwatch">StopWatch</NavLink>
        </li>
        <li>
          <NavLink to="randomColor">RandomColor Generator</NavLink>
        </li>
        <li>
          <NavLink to="agecalculator">Age Calculator</NavLink>
        </li>
        <li>
          <NavLink to="simpleinterest">Interest Calculator</NavLink>
        </li>
        <li>
          <NavLink to="textfile">Text File</NavLink>
        </li>
        <li>
          <NavLink to="pagination">Pagination Example</NavLink>
        </li>
        <li>
          <NavLink to="weatherapp">Weather App </NavLink>
        </li>
        <li>
          <NavLink to='formik' >Formik</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
