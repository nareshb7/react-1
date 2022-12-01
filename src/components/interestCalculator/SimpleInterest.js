import React, { useState, useEffect } from 'react';

const SimpleInterest = () => {
  const [data, setData] = useState({
    principle: 1,
    roi: 10,
    time: 1,
  });
  const [interest, setInterest] = useState('');

  useEffect(() => {
    let years = (data.time / 12).toFixed(2);
    let amt = (data.principle * years * data.roi) / 100;
    // let val = (data.principle * (1 + years * data.roi)) / 10;
    // console.log(val, 'val');
    setInterest(amt);
  }, [data]);

  return (
    <div>
      <h3>Simple Interest : </h3>
      <div>
        <span>Enter The Total Amount : </span>
        <input
          type="number"
          name="principle"
          value={data.principle}
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
        />
        <br />
        <span>Enter the Duration in Months : </span>
        <input
          type="number"
          name="time"
          value={data.time}
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
        />
        <br />{' '}
        <input
          type="range"
          name="roi"
          value={data.roi}
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
          min="5"
          max="15"
        />{' '}
        value : {data.roi}%<div></div>
      </div>
      <div>
        <h3>Interest Amount : Rs. {interest}/-</h3>
        <h3>Total Amount : Rs. {interest + parseInt(data.principle)}/-</h3>
        <h5>Data : {JSON.stringify(data)}</h5>
      </div>
    </div>
  );
};
export default SimpleInterest;
