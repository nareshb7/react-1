import React, { useState, useEffect } from 'react';

const TodoData = ({ todoData, updateFunc }) => {
  const [data, setData] = useState(todoData);
  useEffect(() => {
    setData(todoData);
  }, [todoData]);
  const deleteFunc = (data) => {
    let newTodoData = todoData.filter((val) => val.input != data.input);
    setData(newTodoData);
  };
  const completeFunc = (data) => {
    let newData = todoData.map((val) => {
      if (val.input == data.input) {
        val.isComplete = true;
      }
      return val;
    });
    setData(newData);
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
            console.log(data, 'data');
            return (
              <tr key={idx}>
                <td>
                  <input type="checkbox" />{' '}
                </td>
                <td>{data.input}</td>
                <td>{data.description}</td>
                <td>
                  <button onClick={() => updateFunc(data)}>Update</button>{' '}
                </td>
                <td>
                  <button disable="true" onClick={() => completeFunc(data)}>
                    Complete
                  </button>{' '}
                </td>
                <td>
                  <button onClick={() => deleteFunc(data)}>Delete</button>{' '}
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
