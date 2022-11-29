import React from 'react';
import { useParams } from 'react-router-dom';

const Params = () => {
  const params = useParams();
  return <div>Params Val : {params.obj}</div>;
};
export default Params;
