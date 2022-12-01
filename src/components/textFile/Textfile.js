import fs from 'fs';
import React, {useState} from 'react';

const TextFile = () => {
  const [ipt,setIpt] = useState('')
  let data = 'hi this is text file'
 
  console.log('created text file')
  
  return <div>
    <div>
    <input type='text' value={ipt} onChange={(e)=> setIpt(e.target.value)} />
    </div>
  </div>;
};

export default TextFile;
