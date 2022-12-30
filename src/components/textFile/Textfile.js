import React, { useState } from 'react';

const TextFile = () => {
  const [ipt, setIpt] = useState('');
  let data = 'hi this is text file';
  let myarray = ['Naresh', 'Ratan', 'Mayur', 'Seema'];
  const handleChange = (e) => {
    setIpt(e.target.value);
    console.log(e.target);
  };

  const dummyFunc = () => {
    var row_width = 40;
    var content = '';
    content += 'Username' + new Array(row_width + 1).join(' ') + 'Password\n';
    content += '********' + new Array(row_width + 1).join(' ') + '********\n';

    for (var i = 0; i < myarray.length; i += 2) {
      content +=
        myarray[i] + new Array(row_width - myarray[i].length + 9).join(' ');
      content += myarray[i + 1];
      content += '\n';
    }

    // Build a data URI:
    let uri = 'data:application/octet-stream,' + encodeURIComponent(content);

    // Click on the file to download
    location.download = 'textfile.txt';
    console.log(uri, 'uriu');
    // You can also do this as a button that has the href pointing to the data URI
    location.href = uri;
  };
  return (
    <div>
      <div>
        <input type="text" value={ipt} onChange={handleChange} />
      </div>
      <button onClick={dummyFunc}>Click </button>
    </div>
  );
};

export default TextFile;
