import React, { useRef } from 'react';

const UseRef = () => {
  const inputRef = useRef(null);
  const messageRef = useRef(null);
  const handleClick = () => {
    inputRef.current.focus();
    if (!inputRef.current.value) {
      inputRef.current.placeholder = 'Add Something....';
      return;
    }
    messageRef.current.innerText = inputRef.current.value;
    inputRef.current.value = '';
  };
  return (
    <div>
      <div>
        <input type="text" ref={inputRef} />
      </div>
      <div>
        <button onClick={handleClick}>Click</button>
      </div>
      <div>
        <h3 ref={messageRef}> </h3>
      </div>
    </div>
  );
};
export default UseRef;
