import React, { useState, useEffect } from 'react';
import './DownloadBar1.css';

const DownloadBar1 = () => {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState('');
  useEffect(() => {
    setVal(
      setInterval(() => {
        setCount((c) => c + 1);
      }, 100)
    );
  }, []);
  useEffect(() => {
    if (count == 100) {
      clearInterval(val);
    }
  }, [count]);

  return (
    <div className="db1-main">
      <h3>Download Bar :</h3>
      <div className="db1-bg">
        <div className="loader">{count == 100 ? 'Done' : `${count}%`} </div>
      </div>
    </div>
  );
};
export default DownloadBar1;
