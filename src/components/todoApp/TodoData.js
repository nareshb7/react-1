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
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />{' '}
            </th>
            <th>Name</th>
            <th>Description</th>
            <th>Update</th>
            <th>Complete</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, idx) => {
            return (
              <tr key={idx}>
                <td>
                  <input type="checkbox" />{' '}
                </td>
                <td>{data.input}</td>
                <td>{data.description}</td>
                <td>
                  <button
                    disabled={data.isComplete}
                    onClick={() => updateFunc(data)}
                  >
                    Update
                  </button>{' '}
                </td>
                <td>
                  <button
                    disabled={data.isComplete}
                    onClick={() => completeFunc(data)}
                  >
                    {data.isComplete ? 'Completed' : 'Complete'}
                  </button>{' '}
                </td>
                <td>
                  <button onClick={() => deleteFunc(data, idx)}>Delete</button>{' '}
                </td>
              </tr>
            );
          })}{' '}
        </tbody>
      </table>
    </div>
  );
};
export default TodoData;
