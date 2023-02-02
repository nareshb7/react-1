import React, { useState } from 'react';

const UseMemo = () => {
  const [ipt, setIpt] = useState('');

  const calculation = () => {
    let num = 0;
    for (let i = 0; i < 100; i++) {
      num++;
    }
    return num;
  };
  const handleClick = () => {
    console.log(ipt, 'ipt');
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={ipt}
          onChange={(e) => setIpt(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleClick}>Add</button>
        <button onClick={handleClick}>Add (useMemo)</button>
      </div>
      <div> Calculated number : {calculation()}</div>
    </div>
  );
};
export default UseMemo;

/* 
The useMemo Hook only runs when one of its dependencies update.
*/
