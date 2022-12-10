import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const EcommerceMain = () => {
  return (
    <div>
      <ul className="navPage" style={{ margin: '5px' }}>
        <li>
          <Link to="/ecom/ecomlogin">LogIn </Link>
        </li>
        <li>
          <Link to="/ecom/ecomsignup">Sign Up</Link>
        </li>
        <li>
          <Link to="/ecom/ecomhome">Home Page</Link>
        </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default EcommerceMain;
