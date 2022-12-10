import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import Navbar from './components/Navbar';
import EcomRoutes from './EcomRoutes'

const EcomHome = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <EcomRoutes />
    </Provider>
  );
};
export default EcomHome;
