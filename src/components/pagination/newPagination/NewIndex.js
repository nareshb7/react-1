import React, { useState, useEffect } from 'react';
import data from '../mockdata.json';

const NewIndex = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentData, setCurrentData] = useState([]);
  const lastPage = parseInt(data.length / 10) - 1;

  useEffect(() => {
    setCurrentData(data.slice(currentPage * 10, currentPage * 10 + 10));
  }, [currentPage]);

  const showDataFunc = (page, operator) => {
    switch (operator) {
      case '-':
        page <= 0 ? setCurrentPage(0) : setCurrentPage(page - 1);
        break;
      case '+':
        page >= lastPage ? setCurrentPage(lastPage) : setCurrentPage(page + 1);
        break;
      default:
        return;
    }
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
      <button onClick={() => showDataFunc(currentPage, '-')}>Back </button>
      <span>{currentPage + 1} </span>
      <span> of Page : {lastPage + 1}</span>
      <button onClick={() => showDataFunc(currentPage, '+')}>Next </button>
    </div>
  );
};
export default NewIndex;
