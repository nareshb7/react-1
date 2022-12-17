import React, { useState, useEffect } from 'react';

const Ex4 = () => {
  //Dynamic Width
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const setDimension = () => {
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
  console.log(screenSize, 'screenSize');
  return (
    <div>
      <h2
        style={{
          width: screenSize.dynamicWidth <= 720 ? '100%' : 'calc(100% - 100px)',
        }}
      >
        Example 4
      </h2>
    </div>
  );
};
export default Ex4;
