import React, { useState, useEffect } from 'react';

const TodoInput = ({ handleFunc, updateData }) => {
  const [ipt, setIpt] = useState({
    input: '',
    description: '',
  });
  useEffect(() => {
    if (updateData.hasOwnProperty('input')) {
      setIpt(updateData);
    }
  }, [updateData]);

  const submitFunc = (e) => {
    e.preventDefault();
    let d = new Date().toLocaleString();
    let obj = {
      input: ipt.input,
      description: ipt.description,
      isComplete: false,
    };
    handleFunc(obj);
    setIpt({
      input: '',
      description: '',
    });
  };

  return (
    <div>
      <form onSubmit={submitFunc}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={ipt.input}
            onChange={(e) => setIpt({ ...ipt, input: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Descrption</label>
          <input
            type="text"
            value={ipt.description}
            onChange={(e) => setIpt({ ...ipt, description: e.target.value })}
            required
          />
        </div>
        <button>Add Task</button>
      </form>
    </div>
  );
};
export default TodoInput;
