import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as productActions from './redux/Actions';

const R3_ProductForm = ({ actions }) => {
  const obj = {
    id: '',
    brand: '',
    model: '',
    description: '',
  };
  const [data, setData] = useState(obj);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data, 'data');
    setData(obj);
    actions.AddProduct(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={data.id}
            name="id"
            onChange={handleChange}
            placeholder="Enter Product id here..."
            required
          />
        </div>
        <div>
          <input
            type="text"
            value={data.brand}
            name="brand"
            onChange={handleChange}
            placeholder="Enter Product brand here..."
            required
          />
        </div>
        <div>
          <input
            type="text"
            value={data.model}
            name="model"
            onChange={handleChange}
            placeholder="Enter Product model here..."
            required
          />
        </div>
        <div>
          <input
            type="text"
            value={data.description}
            name="description"
            onChange={handleChange}
            placeholder="Enter Product description here..."
            required
          />
        </div>
        <div>
          <button>Add Product</button>
        </div>
      </form>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch),
  };
}

export default connect('', mapDispatchToProps)(R3_ProductForm);
