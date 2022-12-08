import React, { useState, useContext } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import { UserContext } from './WeatherMain';

const Welcome = () => {
  const userData = useContext(UserContext);
  console.log(userData, 'userData');
  const [location, setLocation] = useState('');
  const [result, setResult] = useState({});

  const fetchFunc = async (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c30b4142205bfbfd27a2fcc400ba3a01&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setResult(data);
      });
  };

  return (
    <div>
      <h2>Weather app</h2>
      <div>
        <input
          type="text"
          value={location}
          onChange={() => setLocation(e.target.value)}
        />
        <button onClick={() => fetchFunc(location)}>Check</button>
      </div>
      <div>
        {result?.message ? (
          <h3>City Not Found</h3>
        ) : (
          <>
            <h3>City Name : {result?.name}</h3>
            <h3>Temparature : {result.main?.temp} &#8451; </h3>
            <h3>Max : {result.main?.temp_max} &#8451;</h3>
            <h3>Min : {result.main?.temp_min} &#8451;</h3>
          </>
        )}
      </div>
    </div>
  );
};
export default Welcome;
