import React from 'react';

const Ex5 = () => {
  let obj = {
    type: 'preservation',
    connection: 'Physcal Device',
    macOS: 'yes',
    IOS: 'yes',
    desc: 'description',
    support: 'support',
  };
  let obj1 = {
    type: 'forensic',
    connection: 'Physcal Device',
    macOS: 'yes',
    IOS: 'yes',
    desc: 'description',
    support: 'support',
  };

  let arr = [obj, obj, obj];
  let arr1 = [obj1, obj1, obj1, obj1, obj1];

  let mainObj = { forensic: arr, preservation: arr1 };
  console.log(mainObj, 'arrr');
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Connections</th>
            <th>MacOS</th>
            <th>IOS</th>
            <th>Description</th>
            <th>currently Unsupported</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(mainObj).map((val) => {
            let len = mainObj[val].length;
            return (
              <>
                {mainObj[val].map((obj, idx) => {
                  return (
                    <tr key={idx}>
                      {idx == 0 && <td rowSpan={len}>{obj.type}</td>}
                      <td>{obj.connection} </td>
                      <td>{obj.macOS} </td>
                      <td>{obj.IOS} </td>
                      <td>{obj.desc} </td>
                      <td>{obj.support} </td>
                    </tr>
                  );
                })}
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Ex5;
