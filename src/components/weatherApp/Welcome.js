import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import { UserContext } from './WeatherMain';
import Loader2 from '../css/loader/loader2/Loader2';

const Welcome = () => {
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(UserContext);
  const [location, setLocation] = useState('');
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    userData.hasOwnProperty('fName') ? '' : navigate('/weatherapp/login');
  }, [userData]);

  const fetchFunc = async (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c30b4142205bfbfd27a2fcc400ba3a01&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setResult(data);
        setLoading(false);
      });
    setLoading(true);
  };
  const logOutFunc = () => {
    setUserData({});
  };

  return (
    <div>
      <h2>Weather app</h2>
      <h3>
        Hii {userData.fName}
        <button style={{ pading: '5px' }} onClick={logOutFunc}>
          Logout
        </button>
      </h3>
      <div>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={() => fetchFunc(location)}>Check</button>
      </div>
      <div>
        {loading ? (
          <h3>
            <Loader2 />
          </h3>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};
export default Welcome;
