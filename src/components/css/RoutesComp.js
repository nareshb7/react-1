import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import TextWriter from './textWriter/TextWriter';
import Loader1 from './loader/loader1/Loader1';

const CssRoutes = () => {
  console.log('is it workingg');
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Nav />} /> */}
        <Route path="textWriter" element={<TextWriter />} />
        <Route path="loader1" element={<Loader1 />} />
      </Routes>
    </div>
  );
};
export default CssRoutes;
