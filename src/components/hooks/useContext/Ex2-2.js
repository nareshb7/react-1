import React, { memo } from 'react';

const ExampleTwo_2 = ({ users }) => {
  return (
    <div>
      {users.map((val, idx) => {
        return (
          <div key={idx} style={{ textAlign: 'start', marginLeft: '10px' }}>
            <h2>Name: {val.name}</h2>
            <h4>Position : {val.position}</h4>
          </div>
        );
      })}{' '}
    </div>
  );
};
export default memo(ExampleTwo_2);

/*
Using memo will cause React to skip rendering a component if its props have not changed.

This can improve performance.
*/
