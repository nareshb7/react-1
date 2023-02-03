import React, { useContext } from 'react';
import { DataContext } from './Ex1';
const ContextOne = () => {
  const val = useContext(DataContext);
  console.log(val, 'val');
  return <div>Context value: {val}</div>;
};
export default ContextOne;
