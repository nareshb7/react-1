import React, { memo } from 'react';

const UCB_1 = ({ decrement }) => {
  console.log('ucb');
  return (
    <div>
      UCB -1
      <button onClick={decrement}>Decrement - </button>
    </div>
  );
};
export default memo(UCB_1);
