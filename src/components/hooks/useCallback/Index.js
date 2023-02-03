import React, { useState, useCallback } from 'react';
import UCB_1 from './Ex1';

const UseCallback = () => {
  const [count, setCount] = useState(0);
  // if u use callback function it prevents rendering when the function call happens and doesnt print the console
  const decrement = useCallback(() => {
    setCount((c) => c - 1);
  }, []);

  // if u run this function the UCB_1 comp will render for every time when u call the decrement function  , u can check in the console
  // const decrement = () => {
  //   setCount((c) => c - 1);
  // };
  return (
    <div>
      <h2>use callback</h2>
      <div>
        <UCB_1 decrement={decrement} />
      </div>
      <div>
        <h3>count: {count}</h3>
        <button onClick={() => setCount((c) => c + 1)}>Increment + </button>
      </div>
    </div>
  );
};
export default UseCallback;
/*
The useCallback Hook only runs when one of its dependencies update.

One reason to use useCallback is to prevent a component from re-rendering unless its props have changed.
*/
