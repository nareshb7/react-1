import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoData from './TodoData';

const TodoIndex = () => {
  const [todoData, setTodoData] = useState([]);
  const [updateData, setUpdateData] = useState({});
  const updateFunc = (data) => {
    setUpdateData(data);
  };
  const handleFunc = (ipt) => {
    let isNew = true;
    const newObj = todoData.map((val) => {
      if (val.input == ipt.input) {
        isNew = false;
        val.description = ipt.description;
      }
      return val;
    });
    isNew ? setTodoData([...todoData, ipt]) : setTodoData(newObj);
  };
  return (
    <div>
      <TodoInput handleFunc={handleFunc} updateData={updateData} />
      <TodoData todoData={todoData} updateFunc={updateFunc} />
    </div>
  );
};
export default TodoIndex;
