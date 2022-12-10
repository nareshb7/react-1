import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const FormikEx = () => {
  return (
    <div>
      <div>
        <Link to="dynamicform">Go to Dynamic Form </Link>
      </div>
      <div>
        <Link to="manualform">Go to Manual Form </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default FormikEx;
