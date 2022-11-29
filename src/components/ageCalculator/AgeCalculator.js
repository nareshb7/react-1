import React, { useState } from 'react';

const AgeCalculator = () => {
  const [dob, setDob] = useState('');
  const [result, setResult] = useState('');

  const handleFunc = () => {
    let d = new Date(dob).getTime();
    let today = new Date().getTime();
    let res = today - d;
    let tdays = res / (86400 * 1000);
    let years = Math.floor(tdays / 365);
    let months = Math.floor((tdays % 365) / 30);
    let days = Math.floor((tdays % 365) % 31);
    setResult(`${years} Years ${months} Months ${days} Days`);
  };

  return (
    <div>
      <div>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <button onClick={handleFunc}> Click </button>
      </div>
      <div>
        <h3>Your Age is : {result}</h3>
      </div>
    </div>
  );
};
export default AgeCalculator;
