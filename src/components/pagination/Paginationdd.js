import React, { useState } from 'react';
import { pageData } from './data.js';

const Pagination = () => {
  const data = pageData;
  let page = 1;
  const [render, setRender] = useState(true);
  const pageLimit = 5;
  const currentTableData = (page) => {
    console.log('tad', page);
    return data.slice(page, page + 5);
  };
  let currentData = currentTableData();
  const nextFunc = () => {
    page += 5;
    currentData = currentTableData(page);
    setRender(!render)
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Value</th>
            <th>Index</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item}</td>
                <td>{index}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={nextFunc}>Next</button>
    </div>
  );
};
export default Pagination;
