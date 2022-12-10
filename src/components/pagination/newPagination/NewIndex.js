import React, { useState, useEffect } from 'react';
import data from './newData.json';

const NewIndex = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    setCurrentData(data.slice(0, 10));
  }, []);
  useEffect(() => {}, [currentPage]);
  const firstPage = 1;
  const lastPage = 3;

  const showDataFunc = (page, prop) => {
    switch (prop) {
      case '-':
        page > lastPage ? (page = 0) : (page = page);
        setCurrentPage(page - 1);
        setCurrentData(data.slice(page * 10, page * 10 + 10));
        break;
      case '+':
        page > lastPage ? (page = 0) : (page = page);
        setCurrentPage(page + 1);
        setCurrentData(data.slice(page * 10, page * 10 + 10));
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
      <button onClick={() => showDataFunc(currentPage, '+')}>Next </button>
    </div>
  );
};
export default NewIndex;
