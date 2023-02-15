import React, { useState, useEffect } from 'react';

const Ex4 = () => {
  const [check, setCheck] = useState(true);
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const [randomColor, setRandomColor] = useState('ccc');
  const setDimension = () => {
    let min = 100;
    let max = 999;
    let random = (Math.random() * (max - min) + min).toFixed();
    setRandomColor(random);
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', setDimension);
    return () => {
      window.removeEventListener('resize', setDimension);
    };
  }, [screenSize]);
  return (
    <div>
      <h2
        style={{
          width: screenSize.dynamicWidth <= 720 ? '100%' : 'calc(100% - 100px)',
        }}
      >
        Example 4 : Width: {screenSize.dynamicWidth} Height:{' '}
        {screenSize.dynamicHeight}
      </h2>
      <h1 style={{ backgroundColor: `#${randomColor}` }}>
        Dynamic Color (resize the Window){' '}
      </h1>
    </div>
  );
};
export default Ex4;
