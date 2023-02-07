import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from './redux/Actions';

const R3_ProductList = ({ products, actions }) => {
  console.log(products, 'pds');
  const handleDelete = (id) => {
    console.log(id, 'id');
    actions.DeleteProduct(id);
  };
  return (
    <div>
      {products.products.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Description</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.products.map((product, idx) => {
              return (
                <tr key={idx}>
                  <td>{product.id}</td>
                  <td>{product.brand}</td>
                  <td>{product.model}</td>
                  <td>{product.description}</td>
                  <td>
                    <button onClick={() => handleDelete(product.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(productActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(R3_ProductList);
