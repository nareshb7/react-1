import React from 'react';
import ReduxNav from './Nav';
import ReduxRoutes from './RoutesComp';
import './style.css';

const ReduxIndex = () => {
  return (
    <div>
      <ReduxNav />
      <ReduxRoutes />
    </div>
  );
};
export default ReduxIndex;
