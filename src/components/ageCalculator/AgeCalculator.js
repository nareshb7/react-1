import React, { useState } from 'react';

const AgeCalculator = () => {
  const [dob, setDob] = useState('');
  const [result, setResult] = useState('');

  const handleFunc = () => {
    //It checks with Ur DOB and Present Date and Calculates the Days...
    // we calculated per month as 31 days
    let d = new Date(dob).getTime();
    let today = new Date().getTime();
    let res = today - d;
    console.log(res);
    let tdays = res / (86400 * 1000);
    let years = Math.floor(tdays / 365);
    let months = Math.floor((tdays % 365) / 31);
    let days = Math.floor((tdays % 365) % 31);
    setResult(`${years} Years ${months} Months ${days} Days`);
  };

  return (
    <div>
      <div>
        <span>Enter the Date :</span>
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
