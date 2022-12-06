import React, { useState } from 'react';

const Palindrome = () => {
  const data = 'Hyderabad';
  const [ipt, setIpt] = useState('');
  const [result, setResult] = useState('');
  const palCheck = () => {
    let rev = [];
    for (let x of ipt) {
      rev.unshift(x);
    }
    console.log(ipt, rev.toString(), '1234');
    let res = ipt.toString() == rev.toString() ? 'Same' : 'Not Same';
    setResult(res);
  };
  return (
    <div>
      P<h2>Palindrome : </h2>
      <div>
        <input
          type="text"
          value={ipt}
          onChange={(e) => setIpt(e.target.value)}
        />
        <button onClick={palCheck}> Check</button>
      </div>
      <h4>Value is {result}</h4>
    </div>
  );
};
export default Palindrome;
