import React from 'react';
import CssNav from './Nav';
import CssRoutes from './RoutesComp';
import './CssStyles.css';

const CssMain = () => {
  return (
    <div className="cssMain">
      <h1>CSS Animations</h1>
      <CssNav />
      <CssRoutes />
    </div>
  );
};
export default CssMain;
