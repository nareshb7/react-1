import React from 'react';

const Ex4 = () => {
  const arr = [1, 2, 3, 4, 5, 6, 78, 9];
  const newArr = (
    <ul>
      {' '}
      {arr.map((val) => (
        <li>{val}</li>
      ))}{' '}
    </ul>
  );
  let obj = { name: 'Naresh', role: 'UI', location: 'HYD' };
  const { name, role, location } = obj;
  console.log(name, role, location, 'obj');
  return (
    <div>
      <h2>{newArr}</h2>
    </div>
  );
};
export default Ex4;
