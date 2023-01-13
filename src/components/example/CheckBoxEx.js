import React, { useState } from 'react';

const CheckBoxEx = () => {
  let arr = [];
  const [checked, setChecked] = useState([]);
  const handleChange = (e) => {
    arr = [];
    let checkedVal = document.getElementsByName('cBox');
    checkedVal.forEach((val) => {
      if (val.checked == true) {
        arr.push(val.value);
      }
    });
    setChecked(arr);
    console.log(arr, 'checked');
  };
  return (
    <div>
      <form>
        <div>
          <input
            type="checkbox"
            name="cBox"
            value="1"
            className="xyz"
            onChange={handleChange}
          />
          <span>Checkbox 1 </span>
        </div>
        <div>
          <input
            type="checkbox"
            name="cBox"
            value="2"
            className="xyz"
            onChange={handleChange}
          />
          <span>Checkbox 2 </span>
        </div>
        <div>
          <input
            type="checkbox"
            name="cBox"
            value="3"
            className="xyz"
            onChange={handleChange}
          />
          <span>Checkbox 3 </span>
        </div>
        <div>
          <input
            type="checkbox"
            name="cBox"
            value="4"
            className="xyz"
            onChange={handleChange}
          />
          <span>Checkbox 4 </span>
        </div>
        <div>
          <input
            type="checkbox"
            name="cBox"
            value="5"
            className="xyz"
            onChange={handleChange}
          />
          <span>Checkbox 5 </span>
        </div>
      </form>
      <h2>Checked CheckBoxes are {checked.join(',')} </h2>
    </div>
  );
};
export default CheckBoxEx;
