import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import TextWriter from './textWriter/TextWriter';

const CssRoutes = () => {
  console.log('is it workingg');
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Nav />} /> */}
        <Route path="textWriter" element={<TextWriter />} />
      </Routes>
    </div>
  );
};
export default CssRoutes;
