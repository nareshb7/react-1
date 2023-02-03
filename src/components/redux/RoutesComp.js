import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ReduxExample_1 from './reduxExample1/Index';
import ReduxExample_2 from './reduxExample2/Index';
import R_UserForm from './reduxExample2/SignUpForm';
import R_LoginForm from './reduxExample2/LoginForm';

const ReduxRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="rexample1" element={<ReduxExample_1 />} />
        <Route path="rexample2" element={<ReduxExample_2 />}>
          <Route path="re2signup" element={<R_UserForm />} />
          <Route path="re2login" element={<R_LoginForm />} />
        </Route>
      </Routes>
    </div>
  );
};
export default ReduxRoutes;
