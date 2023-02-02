import React, { useReducer } from 'react';
import ReducerUsers from './Users';

const UseReducer = () => {
  const initialState = {
    cakes: 10,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'BUY': {
        return {
          cakes: state.cakes - 1,
        };
      }
      case 'SELL': {
        return {
          cakes: state.cakes + 1,
        };
      }
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h3>No of Cakes in Store : {state.cakes}</h3>
      <div>
        <button
          title="I m buying the cakes from Shop"
          onClick={() => dispatch({ type: 'BUY' })}
        >
          Buy Cake
        </button>
        <button
          title="I m selling the cakes to Shop"
          onClick={() => dispatch({ type: 'SELL' })}
        >
          Sell Cake
        </button>
      </div>
      <div>
        <h2>**********************************</h2>
        <ReducerUsers />
      </div>
    </div>
  );
};
export default UseReducer;

/* 
The useReducer Hook is similar to the useState Hook.
It allows for custom state logic.

If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.

*/
