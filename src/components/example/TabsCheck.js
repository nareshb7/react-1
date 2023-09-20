import React, { useRef } from 'react';

const TabCheck = () => {
  const firstRef = useRef();
  const lastRef = useRef();
  const handleFirstKeyDown = (e) => {
    if (e.key === 'Tab' && e.shiftKey) {
      lastRef.current.focus();
    }
  };
  const handleLastKeyDown = (e) => {
    if (e.key === 'Tab' && !e.shiftKey) {
      firstRef.current.focus();
    }
  };
  return (
    <div>
      <button className="first" ref={firstRef} onKeyDown={handleFirstKeyDown}>
        BUtton 1
      </button>
      <button>BUtton 2</button>
      <button>BUtton 3</button>
      <button>BUtton 4</button>
      <button>BUtton 5</button>

      <button className="last" ref={lastRef} onKeyDown={handleLastKeyDown}>
        BUtton 6
      </button>
    </div>
  );
};
export default TabCheck;
