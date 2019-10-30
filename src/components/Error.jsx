import React from 'react';
import T from 'prop-types';

const Error = ({ message }) => {
  return <div style={{ textAlign: 'center' }}>{message}</div>;
};

Error.propTypes = {
  message: T.string.isRequired,
};

export default Error;
