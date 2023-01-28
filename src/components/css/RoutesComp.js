import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import TextWriter from './textWriter/TextWriter';
import Loader1 from './loader/loader1/Loader1';
import Loader2 from './loader/loader2/Loader2';
import Loader3 from './loader/loader3/Loader3';
import Btn1 from './btnEffects/btn1/Btn1';
import Btn2 from './btnEffects/btn2/Btn2';
import DownloadBar1 from './downloadBar/downloadBar1/DownloadBar1';
import VoiceSearch1 from './voiceSearch/VoiceSearch1';
import Animation1 from './animations-3D/Animation1';

const CssRoutes = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Nav />} /> */}
        <Route path="textWriter" element={<TextWriter />} />
        <Route path="loader1" element={<Loader1 />} />
        <Route path="loader2" element={<Loader2 />} />
        <Route path="btn1" element={<Btn1 />} />
        <Route path="loader3" element={<Loader3 />} />
        <Route path="downloadbar1" element={<DownloadBar1 />} />
        <Route path="btn2" element={<Btn2 />} />
        <Route path="voiceSearch1" element={<VoiceSearch1 />} />
        <Route path="anim1" element={<Animation1 />} />
      </Routes>
    </div>
  );
};
export default CssRoutes;
