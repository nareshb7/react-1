import React, { useState, useEffect } from 'react';
import './DownloadBar1.css';

const DownloadBar1 = () => {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState('');
  const [isDone, setIsDone] = useState(false);
  const [restart, setRestart] = useState(true);

  const start = () => {
    if (count == 0) {
      setVal(
        setInterval(() => {
          setCount((c) => c + 1);
        }, 100)
      );
    }
  };
  useEffect(() => {
    start();
    setIsDone(false)
  }, [restart]);
  useEffect(() => {
    if (count == 100) {
      clearInterval(val);
      setCount(0);
      setIsDone(true)
    }
  }, [count]);

  return (
    <div className="db1-main">
      <h3>Download Bar :</h3>
      <div className={isDone ? 'db1-bg done' : 'db1-bg'}>
        <div className="loader" onClick={() => setRestart(!restart)}>
          {isDone ? 'Done' : `${count}%`}{' '}
        </div>
      </div>
    </div>
  );
};
export default DownloadBar1;
