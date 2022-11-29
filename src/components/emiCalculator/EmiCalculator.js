import React, { useState } from 'react';

const EmiCalculator = () => {
  const [total, setTotal] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(3);
  const [result, setResult] = useState(0);
  const handleSubmit = () => {
    let remainAmt = total - downPayment;
    setResult((remainAmt / tenure).toFixed(0));
  };
  return (
    <div>
      <h3>EMI Calculator</h3>
      <div>
        <h4>Total : </h4>
        <input
          type="text"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
        />
      </div>
      <div>
        <h4>DownPayment :</h4>
        <input
          type="range"
          value={downPayment}
          max={total}
          onChange={(e) => setDownPayment(e.target.value)}
        />{' '}
        {total}
        <h5>DownPayement : {downPayment}</h5>
      </div>
      <div>
        <h4>Select the Tenure :</h4>
        <select
          defaultValue={tenure}
          onChange={(e) => setTenure(e.target.value)}
        >
          <option value="3">3 Months</option>
          <option value="6">6 Months</option>
          <option value="9">9 Months</option>
          <option value="12">12 Months</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        <h3>Per Month Amount : Rs {result}/-</h3>
      </div>
    </div>
  );
};
export default EmiCalculator;
