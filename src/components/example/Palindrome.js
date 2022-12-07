import React, { useState } from 'react';

const Palindrome = () => {
  const [ipt, setIpt] = useState('');
  const [result, setResult] = useState('');
  const palCheck = () => {
    let rev = [];
    for (let x of ipt) {
      rev.unshift(x);
    }
    let res = ipt == rev.join('') ? 'is Palindrome' : 'is Not Palindrome';
    setResult(res);
  };
  return (
    <div>
      <h2>Palindrome : </h2>
      <div>
        <input
          type="text"
          value={ipt}
          onChange={(e) => setIpt(e.target.value)}
        />
        <button onClick={palCheck}> Check</button>
      </div>
      <h4>
        Value: {ipt} {result}
      </h4>
    </div>
  );
};
export default Palindrome;
