import React, { useState } from 'react';

const SpeedCalculator = () => {
  const [kmph, setKMPH] = useState('');
  const [distance, setDistance] = useState('');
  const [time, setTime] = useState('');
  const [output, setOutput] = useState('');

  const speedFunc = (e) => {
    e.preventDefault();
    if (!kmph && distance && time) {
      let opt = (distance / (time / 60)).toFixed(2);
      setOutput(
        `Distance : ${distance}km / Time : ${time}minutes = ${opt} KMPH`
      );
      setDistance('');
      setTime('');
    } else {
      setOutput('Check Fields & Speed Must be Empty');
    }
  };
  const timeFunc = (e) => {
    e.preventDefault();
    if (!time && distance && kmph) {
      let opt = (distance / kmph).toFixed(2);
      let t = opt.split('.');
      opt = (t[0] * 60 + (t[1] / 100) * 60).toFixed(1);
      setOutput(
        `Distance : ${distance}km / Speed : ${kmph}kmph = ${opt} Minutes ( ${Math.floor(
          opt / 60
        )} Hrs -${Math.floor(opt % 60)} minutes  )`
      );
      setDistance('');
      setKMPH('');
    } else {
      setOutput('Check Fields & Time Must be Empty');
    }
  };
  const distanceFunc = (e) => {
    e.preventDefault();
    if (!distance && kmph && time) {
      let opt = (kmph * (time / 60)).toFixed(2);
      setOutput(`Speed : ${kmph}KMPH / Time : ${time}minutes = ${opt} Km`);
      setKMPH('');
      setTime('');
    } else {
      setOutput('Check Fields & Distance Must be Empty');
    }
  };
  return (
    <div>
      <div>
        <form className="speedForm">
          <h3>Speed, Distance & Time Calculator</h3>
          <div>
            <div>
              <label>Speed (KMPH)</label>
            </div>
            <div>
              <input
                type="number"
                placeholder="KMPH"
                name="kmph"
                value={kmph}
                onChange={(e) => setKMPH(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div>
              <label>Distance (Km)</label>
            </div>
            <div>
              <input
                type="number"
                placeholder="Distance"
                name="distance"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div>
              <label>Time (Minutes)</label>
            </div>
            <div>
              <input
                type="number"
                placeholder="Time in Minutes"
                name="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>
          <div>
            <h3>What Do you want to know???</h3>{' '}
          </div>
          <div>
            <button onClick={speedFunc} style={{ margin: '10px' }}>
              {' '}
              Speed{' '}
            </button>
            <button onClick={distanceFunc} style={{ margin: '10px' }}>
              {' '}
              Distance{' '}
            </button>
            <button onClick={timeFunc} style={{ margin: '10px' }}>
              {' '}
              Time{' '}
            </button>
          </div>
        </form>
        <div>
          <h4>Output : {output}</h4>
        </div>
      </div>
    </div>
  );
};

export default SpeedCalculator;
