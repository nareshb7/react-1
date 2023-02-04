import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ReduxExample_1 from './reduxExample1/Index';
import ReduxExample_2 from './reduxExample2/Index';
import R_UserForm from './reduxExample2/SignUpForm';
import R_LoginForm from './reduxExample2/LoginForm';
import R2_Home from './reduxExample2/Home';
import R2_UpdateUser from './reduxExample2/UpdateUser';
import ReduxEx_3 from './reduxExample3/Index';

const ReduxRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="rexample1" element={<ReduxExample_1 />} />
        <Route path="rexample2" element={<ReduxExample_2 />}>
          <Route path="re2signup" element={<R_UserForm />} />
          <Route path="re2login" element={<R_LoginForm />} />
          <Route path="re2home" element={<R2_Home />} />
          <Route path="re2updateuser" element={<R2_UpdateUser />} />
        </Route>
        <Route path="rexample3" element={<ReduxEx_3 />} />
      </Routes>
    </div>
  );
};
export default ReduxRoutes;
