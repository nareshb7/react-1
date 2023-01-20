import React, { useState } from 'react';
import Loader1 from '../css/loader/loader1/Loader1';

const Store = () => {
  const URL = 'https://jsonplaceholder.typicode.com/photos/?_limit=100';
  const [fetchData, setFetchData] = useState([]);

  const fetchFun = async () => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setFetchData(data));
  };
  fetchFun();

  return (
    <div>
      {fetchData?.length ? (
        <div>
          {fetchData.map((item, idx) => {
            return (
              <div key={idx} style={{ width: '32%', display: 'inline-block' }}>
                <h1>Id : {item.id}</h1>
                <h1>Title : {item.title}</h1>
                <img src={item.thumbnailUrl} alt="img" />
              </div>
            );
          })}
        </div>
      ) : (
        <h1 style={{ textAlign: 'center' }}>
          <Loader1 />
        </h1>
      )}
    </div>
  );
};

export default Store;
