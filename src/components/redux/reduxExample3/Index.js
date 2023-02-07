import React from 'react';
import R3_ProductForm from './ProductForm';
import R3_ProductList from './ProductList';
import { Provider } from 'react-redux';
import { store } from './redux/Store';
const storeVal = store();

const ReduxEx_3 = () => {
  return (
    <Provider store={storeVal}>
      <div>
        <h3>Redux example 3</h3>
        <div>
          <R3_ProductForm />
        </div>
        <div>
          <R3_ProductList />
        </div>
      </div>
    </Provider>
  );
};
export default ReduxEx_3;

// connect , mapStateToProps , mapStateToDisapatch
