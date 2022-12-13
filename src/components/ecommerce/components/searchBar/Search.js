import React, { useState } from 'react';
import { data } from '../Data';

const Search = ({ items }) => {
  const [searchIpt, setSearchIpt] = useState('');
  const products = JSON.parse(JSON.stringify(data));
  let list = [];
  const handleChange = (e) => {
    list = [];
    products.forEach((item) => {
      if (item.iName.toLowerCase().includes(searchIpt.toLowerCase())) {
        list.push(item);
      }
    });
    items(list);
  };
  const sortFunc = (val) => {
    if (val == 'iName' || val == 'price') {
      products.sort((a, b) => {
        if (a[val] > b[val]) {
          return 1;
        }
        if (a[val] < b[val]) {
          return -1;
        }
        return 0;
      });
    } else if (val == 'zName') {
      products.sort((a, b) => {
        if (a['iName'] < b['iName']) {
          return 1;
        }
        if (a['iName'] > b['iName']) {
          return -1;
        }
        return 0;
      });
    } else if (val == 'hPrice') {
      console.log('h-l');
      products.sort((a, b) => {
        if (a['price'] < b['price']) {
          return 1;
        }
        if (a['price'] > b['price']) {
          return -1;
        }
        return 0;
      });
    }
    items(products);
  };
  // else if (val =='zName') {
  //     products.sort((a,b)=> {
  //         if (a['iName'] < b['iName']) {return 1}
  //         if (a['iName'] > b['iName']) {return -1}
  //         return 0
  // }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginBlock: '10px',
        background: '#888',
      }}
    >
      <div style={{ width: '50%' }}>
        <span>Search Products</span>
        <input
          type="text"
          placeholder="Enter Item Name to search"
          value={searchIpt}
          onChange={(e) => setSearchIpt(e.target.value)}
          style={{ width: '75%', padding: '10px' }}
          onKeyUp={handleChange}
        />
      </div>
      <div style={{ width: '40%' }}>
        <select
          style={{ width: '70%', padding: '10px', margin: '5px' }}
          onClick={(e) => sortFunc(e.target.value)}
        >
          <option value="iName">Sort By Name(A-Z)</option>
          <option value="zName">Sort By Name(Z-A)</option>
          <option value="price">Sort By Price(L-H)</option>
          <option value="hPrice">Sort By Price(H-L)</option>
        </select>
      </div>
    </div>
  );
};

export default Search;
