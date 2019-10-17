import React from 'react';

const FormErrorText = ({ message, className }) => {
  const text = message ? (
    <p className={className}>
      {message}
    </p>
  ) : null;
  return text;
};

export default FormErrorText;
