import React, { useState, useContext } from 'react';
import { FormContext } from './Ex2';

const ExampleTwo_1 = () => {
  const { users, setUsers } = useContext(FormContext);
  const [data, setData] = useState({
    name: '',
    position: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data, 'data');
    setUsers([...users, data]);
    setData({ name: '', position: '' });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            placeholder="Enter name here..."
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="position"
            value={data.position}
            onChange={(e) => setData({ ...data, position: e.target.value })}
            placeholder="Enter your role here..."
            required
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};
export default ExampleTwo_1;
