import React, { useEffect, useState } from 'react';

const IpAdrs = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    console.log('hello');
    fetch('https://geolocation-db.com/json/')
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'data');
        setData(data);
      })
      .catch((err) => console.log(err, 'err'));

    navigator.geolocation.watchPosition(function (position) {
      console.log('Latitude is :', position.coords.latitude);
      console.log('Longitude is :', position.coords.longitude);
    });
  }, []);
  return (
    <div>
      <h1>IpAdrs :{data.IPv4} </h1>
      <h1>Check the Console </h1>{' '}
    </div>
  );
};
export default IpAdrs;
