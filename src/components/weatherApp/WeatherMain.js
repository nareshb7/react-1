import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';

const WeatherMain = () => {
  const [location, setLocation] = useState('');
  const [result, setResult] = useState({});

  const fetchFunc = async (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c30b4142205bfbfd27a2fcc400ba3a01`
    )
      .then((response) => response.json())
      .then((data) => {
        setResult(data);
      });
  };

  const handleChange = (e) => {
    fetchFunc(e.target.value);
    setLocation(e.target.value);
  };
  console.log(result, 'result');
  return (
    <div>
      <h2>Weather app</h2>
      <div>
        <input type="text" value={location} onChange={handleChange} />
      </div>
      <div>
        <h3>City Name : {result?.name}</h3>
        <h3>Temparature : {result.main?.temp} </h3>
        <h3>Max : {result.main?.temp_max}</h3>
        <h3>Min : {result.main?.temp_min}</h3>
      </div>
    </div>
  );
};
export default WeatherMain;
