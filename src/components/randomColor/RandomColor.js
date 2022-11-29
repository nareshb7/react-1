import React, { useState } from 'react';

const RandomColor = () => {
  const max = 999999;
  const min = 100000;
  const [random, setRandom] = useState(111);
  const colorFunc = () => {
    setRandom(Math.floor(Math.random() * (max - min) + min));
  };
  let myStyle = {
    width: '200px',
    height: '200px',
    backgroundColor: `#${random}`,
    margin: '10px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    color: '#fff',
    borderRadius: '10px',
  };
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const bgColor = { backgroundColor: `rgb(${red},${green},${blue})` };

  let myStyle2 = {
    width: '200px',
    height: '200px',
    backgroundColor: `rgb(${red},${green},${blue})`,
    margin: '10px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    color: '#fff',
    borderRadius: '10px',
  };
  const randomNum = () => {
    let max = 255;
    let min = 0;
    setBlue(Math.floor(Math.random() * (max - min) + min));
    setGreen(Math.floor(Math.random() * (max - min) + min));
    setRed(Math.floor(Math.random() * (max - min) + min));
  };
  return (
    <div>
      <div>
        <div>
          <button
            onClick={colorFunc}
            style={{ margin: '10px', cursor: 'pointer' }}
          >
            {' '}
            Click for new Color
          </button>
          <span style={{ color: '#fff' }}>Color : #{random}</span>
        </div>

        <div style={myStyle}>
          <span>Color : #{random}</span>
        </div>
      </div>
      <div>
        <button onClick={randomNum}> Random Color</button>
        <span style={{ color: '#fff' }}>
          Color : rgb({red},{green},{blue}){' '}
        </span>
        <div style={myStyle2}>
          <span>
            Color : rgb({red},{green},{blue}){' '}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RandomColor;
