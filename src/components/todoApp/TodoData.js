import React, { useState, useEffect } from 'react';

const TodoData = ({ todoData, updateFunc }) => {
  const [data, setData] = useState(todoData);
  const [render, setRender] = useState(true);
  useEffect(() => {
    setData(todoData);
  }, [todoData]);
  const deleteFunc = (data, idx) => {
    todoData.splice(idx, 1);
    setRender(!render);
  };
  const completeFunc = (data) => {
    todoData.forEach((val) => {
      if (val.input == data.input) {
        val.isComplete = true;
      }
    });
    setRender(!render);
  };
  let checkBoxes = [];
  const checkBoxCheck = (e) => {
    checkBoxes = document.getElementsByName('checkBoxes');
    checkBoxes.forEach((c) => (c.checked = e.target.checked));
  };
  const dltCheckBox = () => {
    let dltArr = [];
    checkBoxes.forEach((c) => {
      c.checked && dltArr.unshift(c);
    });
    let cnfrm = confirm('Do u want to delet selected task"s?');
    if (cnfrm) {
      dltArr.forEach((val) => {
        todoData.splice(val.value, 1);
      });
    }
    setRender(!render);
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" onChange={checkBoxCheck} />
            </th>
            <th>Name</th>
            <th>Description</th>
            <th>Update</th>
            <th>Complete</th>
            <th>
              <span onClick={dltCheckBox}>Delete</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, idx) => {
            return (
              <tr key={idx}>
                <td>
                  <input type="checkbox" name="checkBoxes" value={idx} />
                </td>
                <td>{data.input}</td>
                <td>{data.description}</td>
                <td>
                  <button
                    disabled={data.isComplete}
                    onClick={() => updateFunc(data)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    disabled={data.isComplete}
                    onClick={() => completeFunc(data)}
                  >
                    {data.isComplete ? 'Completed' : 'Complete'}
                  </button>
                </td>
                <td>
                  <button onClick={() => deleteFunc(data, idx)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default TodoData;
