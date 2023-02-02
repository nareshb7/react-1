import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UseReducer from './useReducer/Index';
import UseRef from './useRef/Index'
import UseMemo from './useMemo/Index'

const HookRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="useReducer" element={<UseReducer />} />
        <Route path='useRef' element={<UseRef />} />
        <Route path='usememo' element={<UseMemo />} />
      </Routes>
    </div>
  );
};
export default HookRoutes;
