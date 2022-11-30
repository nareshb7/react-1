import React, { useState, useEffect } from 'react';

const SimpleInterest = () => {
  const [data, setData] = useState({
    principal: 1,
    roi: 10,
    time: 1,
  });
  const [interest, setInterest] = useState('');

  useEffect(() => {
    let years = (data.time / 12).toFixed(2);
    let amt = (data.principal * years * data.roi) / 100;
    console.log(years, 'years');
    setInterest(amt);
  }, [data]);

  return (
    <div>
      <h3>Simple Interest : </h3>
      <div>
        <span>Enter The Total Amount : </span>
        <input
          type="text"
          name="principal"
          value={data.principal}
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
        <br />
        5%{' '}
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
        15%
        <div>value : {data.roi}%</div>
      </div>
      <div>
        <h3>Interest Amount : Rs. {interest}/-</h3>
        <h3>Total Amount : Rs. {interest + parseInt(data.principal)}/-</h3>
        <h5>{JSON.stringify(data)}</h5>
      </div>
    </div>
  );
};
export default SimpleInterest;
