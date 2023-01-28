import React, { useState } from 'react';
import './VoiceSearch1.css';

const VoiceSearch1 = () => {
  const [isPlay, setIsPlay] = useState(true);
  return (
    <div className="mic-main">
      <h1 style={{ color: '#bcd' }}>Click the MIC Icon : </h1>
      <h1 style={{ color: '#bca' }}>
        Voice Search is turned {isPlay ? 'Off' : 'On'}
      </h1>
      <div className={isPlay ? 'mic done' : 'mic'}>
        <i className="mic-icon" onClick={() => setIsPlay(!isPlay)}></i>
        <div className={isPlay ? 'done mic-shadow' : 'mic-shadow'}></div>
      </div>
    </div>
  );
};
export default VoiceSearch1;
