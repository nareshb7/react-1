import React, { useState, useEffect } from 'react';
import data from './newData.json';

const NewIndex = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    setCurrentData(data.slice(0, 10));
  }, []);
  const lastPage = (data.length/10) -1;

  const showDataFunc = (page, prop) => {
    page > lastPage ? (page = 0) : (page = page);
    switch (prop) {
      case '-':
        setCurrentPage(page - 1);
        setCurrentData(data.slice(page * 10, page * 10 + 10));
        break;
      case '+':
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
