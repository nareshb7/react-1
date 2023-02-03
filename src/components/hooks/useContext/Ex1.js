import React, { createContext, useContext } from 'react';
import ContextOne from './Ex1-1';

export const DataContext = createContext();
const Example1 = () => {
  const value = 'Hyderabad';

  return (
    <DataContext.Provider value={value}>
      <div>Example One </div>
      <ContextOne />
    </DataContext.Provider>
  );
};
export default Example1;
