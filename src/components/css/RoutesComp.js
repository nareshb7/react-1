import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import TextWriter from './textWriter/TextWriter';
import Loader1 from './loader/loader1/Loader1';
import Loader2 from './loader/loader2/Loader2';
import Btn1 from './btnEffects/btn1/Btn1';

const CssRoutes = () => {
  console.log('is it workingg');
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Nav />} /> */}
        <Route path="textWriter" element={<TextWriter />} />
        <Route path="loader1" element={<Loader1 />} />
        <Route path="loader2" element={<Loader2 />} />
        <Route path="btn1" element={<Btn1 />} />
      </Routes>
    </div>
  );
};
export default CssRoutes;
