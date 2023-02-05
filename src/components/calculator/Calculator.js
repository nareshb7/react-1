import React, { useState, useEffect } from 'react';

const Calculator = () => {
  // Check
  const [ipt, setIpt] = useState('');
  const [val1, setVal1] = useState('');
  const [result, setResult] = useState('');
  const [val2, setVal2] = useState('');
  const [operator, setOperator] = useState('');
  const [value, setValue] = useState('');
  const [isValOne, setIsVal] = useState(true);
  const [disable, setDisable] = useState(false);
console.log("helloooo")
  const handleClick = (val) => {
    setValue(value.concat(val));
    setIpt(ipt.concat(val));
    setDisable(false)
    console.log(val, "val")
    if (isValOne) {
      setVal1(ipt.concat(val));
    } else {
      setVal2(ipt.concat(val));
    }
  };
  const handleFunc = (val) => {
    setValue(value.concat(val));
    setOperator(val);
    setIsVal(false);
    setDisable(true);
    if (operator) {
      let c = handleResult();
      setVal1(c);
      setVal2('');
      setResult('');
      setOperator(val);
    }
    setIpt('');
  };
  const handleResult = () => {
    setIpt('');
    let result = 0;
    switch (operator) {
      case '+':
        result = Number(val1) + Number(val2);
        setResult(result);
        return result;
      case '-':
        result = Number(val1) - Number(val2);
        setResult(result);
        return result;
      case '/':
        result = Number(val1) / Number(val2);
        setResult(result);
        return result;
      case '*':
        result = Number(val1) * Number(val2);
        setResult(result);
        return result;
      default:
        return result;
    }
  };
  const reset = () => {
    setIpt('');
    setIsVal(true);
    setVal1('');
    setVal2('');
    setResult('');
    setValue('');
    setOperator('');
  };
  const backFunc = () => {
    alert('Button is Suffering with fever');
    console.log(value, 'valueeee');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="calcBtn">
        <h3>Calculator</h3>
        <div>{value}.</div>
        <div>
          <input type="text" defaultValue={ipt} />
          <button style={{ backgroundColor: '#099' }} onClick={backFunc}>
            Back
          </button>
        </div>
        <div>
          <button onClick={() => handleClick(1)}>1</button>
          <button onClick={() => handleClick(2)}>2</button>
          <button onClick={() => handleClick(3)}>3</button>
        </div>
        <div>
          <button onClick={() => handleClick(4)}>4</button>
          <button onClick={() => handleClick(5)}>5</button>
          <button onClick={() => handleClick(6)}>6</button>
        </div>
        <div>
          <button onClick={() => handleClick(7)}>7</button>
          <button onClick={() => handleClick(8)}>8</button>
          <button onClick={() => handleClick(9)}>9</button>
        </div>
        <div>
          <button onClick={() => handleFunc('-')} disabled={disable}>
            -
          </button>
          <button onClick={() => handleFunc('+')} disabled={disable}>
            +{' '}
          </button>
          <button onClick={() => handleClick(0)}>0</button>
        </div>
        <div>
          <button onClick={() => handleFunc('/')} disabled={disable}>
            {' '}
            /{' '}
          </button>
          <button onClick={() => handleFunc('*')} disabled={disable}>
            {' '}
            x{' '}
          </button>
          <button onClick={handleResult} style={{ backgroundColor: '#0ff' }}>
            {' '}
            ={' '}
          </button>
        </div>
        <button onClick={reset} style={{ backgroundColor: '#f00' }}>
          Reset
        </button>
      </div>
      <div>
        <h3>Val 1 : {val1}</h3>
        <h3>Val 2 : {val2}</h3>
        <h3>Result : {result}</h3>
      </div>
    </div>
  );
};

export default Calculator;
