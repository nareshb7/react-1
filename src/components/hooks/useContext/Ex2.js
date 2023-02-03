import React, { createContext, useState } from 'react';
import ExampleTwo_1 from './Ex2-1';
import ExampleTwo_2 from './Ex2-2';

export const FormContext = createContext();
const Ex2 = () => {
  const [users, setUsers] = useState([]);
  const value = { users, setUsers };
  console.log(users, 'users');
  return (
    <FormContext.Provider value={value}>
      <div>Example Two : </div>
      <div>
        <ExampleTwo_1 />
      </div>
      <div>
        <ExampleTwo_2 users={users} />
      </div>
    </FormContext.Provider>
  );
};
export default Ex2;
