import React, { useState } from 'react';
import './VoiceSearch1.css';

const VoiceSearch1 = () => {
  const [isPlay, setIsPlay] = useState(false);
  return (
    <div className="mic-main">
      <h1 style={{ color: '#bcd' }}>Click the MIC Icon : </h1>
      <h1 style={{ color: '#bca' }}>
        Voice Search is turned {isPlay ? 'On' : 'Off'}
      </h1>
      <div className={isPlay ? 'mic' : 'mic done'}>
        <i className="mic-icon" onClick={() => setIsPlay(!isPlay)}></i>
        <div className={isPlay ? 'mic-shadow' : 'mic-shadow done'}></div>
      </div>
    </div>
  );
};
export default VoiceSearch1;
