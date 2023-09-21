import React from 'react';

const BlankSpace = ({ height }) => {
  const blankSpaceStyle = {
    height: height || '1rem', // You can specify the height you want, default is 1rem
  };

  return <div style={blankSpaceStyle}></div>;
};

export default BlankSpace;
