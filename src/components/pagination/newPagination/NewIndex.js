import React, { useState, useEffect } from 'react';
import data from './newData.json';

const NewIndex = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    setCurrentData(data.slice(0, 10));
  }, []);
  const firstPage = 1;
  const lastPage = 4;

  const showDataFunc = (page) => {
    page >= lastPage ? (page = 0) : (page = page);
    setCurrentPage(page);
    setCurrentData(data.slice(currentPage * 10, currentPage * 10 + 10));
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Sl No</th>
            <th>First Name </th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, idx) => {
            return (
              <tr key={idx}>
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <button onClick={() => showDataFunc(currentPage - 1)}>Back </button> */}
      <button onClick={() => showDataFunc(currentPage + 1)}>Next </button>
    </div>
  );
};
export default NewIndex;
