import React from 'react';
import './Loader2.css';

const Loader2 = () => {
  return (
    <div>
      <h1>Loader 2 :</h1>
      <div className="loader2">
        <span className="dot one"></span>
        <span className="dot two"></span>
        <span className="dot three"></span>
        <span className="dot four"></span>
        <span className="dot five"></span>
      </div>
      <div className="threedots">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};
export default Loader2;
