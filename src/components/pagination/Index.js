import React, { useState, useMemo } from 'react';
import PaginationEx from './PaginationEx';
import data from './mockdata.json';
import './style.scss';
import NewIndex from './newPagination/NewIndex';

let PageSize = 10;

export default function Index() {
  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  // Just Change the sample value to false to true , It will Open another pagination example
  const [sample, setSample] = useState(false);

  return (
    <div>
      {sample ? (
        <>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>FIRST NAME</th>
                <th>LAST NAME</th>
                <th>EMAIL</th>
                <th>PHONE</th>
              </tr>
            </thead>
            <tbody>
              {currentTableData.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <td>{item.id}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <PaginationEx
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={data.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </>
      ) : (
        <NewIndex />
      )}
    </div>
  );
}
