import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <div>
      <h1>404 Error</h1>
      <button><Link to={'/'}>Back To Home</Link></button>
    </div>
  );
};

export default Notfound;