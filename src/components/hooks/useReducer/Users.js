import React, { useState, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADDDATA': {
      return { ...state, users: [...state.users, action.payload] };
    }
    case 'GETDATA': {
      return state;
    }
    default:
      return state;
  }
};

const ReducerUsers = () => {
  const [data, setData] = useState({
    name: '',
    location: '',
  });
  const initialState = {
    users: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADDDATA', payload: data });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            placeholder="Enter name here..."
          />
        </div>
        <div>
          <input
            type="text"
            name="location"
            value={data.location}
            onChange={handleChange}
            placeholder="Enter location here..."
          />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
      <div>
        {state.users.map((val, idx) => {
          return (
            <div key={idx}>
              <h3>
                {idx + 1}. {val.name} - {val.location}{' '}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ReducerUsers;
