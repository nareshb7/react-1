import React, { useState, useMemo } from 'react';

const UseMemo = () => {
  const [ipt, setIpt] = useState('');
  const [count, setCount] = useState(0);

  const expensiveCalculation = (num) => {
    console.log('calculating......', new Date().getSeconds());
    // It will take 2 seconds to iterate the loop
    for (let i = 0; i < 100000000; i++) {
      num++;
    }
    console.log('end', new Date().getSeconds());
    return num;
  };
  const handleClick = () => {
    console.log(ipt, 'ipt');
  };
  //
  const calculation = useMemo(() => expensiveCalculation(count), [count]);
  // const calculation = expensiveCalculation(count);

  return (
    <div>
      <div>
        <input
          type="text"
          value={ipt}
          onChange={(e) => setIpt(e.target.value)}
        />
        <button onClick={handleClick}>Add</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c + 1)}>Add +1 (useMemo)</button>
      </div>
      <div> Calculated number : {calculation}</div>
    </div>
  );
};
export default UseMemo;

/* 
The useMemo Hook only runs when one of its dependencies update.
*/
