import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Example from './Example';
import Example1 from './Example1';
import Example2 from './Example2';
import Ex3 from './Ex3';
import Ex4 from './Ex4';
import Ex5 from './Ex5';
import IpAdrs from './IpAdrs';
import GetLocalIp from './LocalIpAdrs';
import Palindrome from './Palindrome';
import CheckBoxEx from './CheckBoxEx';

const ExampleRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="ex" element={<Example />} />
        <Route path="ex1" element={<Example1 />} />
        <Route path="ex2" element={<Example2 />} />
        <Route path="ex3" element={<Ex3 />} />
        <Route path="ex4" element={<Ex4 />} />
        <Route path="ex5" element={<Ex5 />} />
        <Route path="ipadrs" element={<IpAdrs />} />
        <Route path="localip" element={<GetLocalIp />} />
        <Route path="palindrome" element={<Palindrome />} />
        <Route path="checkboxex" element={<CheckBoxEx />} />
      </Routes>
    </div>
  );
};
export default ExampleRoutes;
