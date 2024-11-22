import React from 'react';

const ButtonComponent = () => {
  return <div>Button Component</div>;
};

export const buttonComponentProperties = {
  title: { type: 'text', label: 'Title', defaultValue: '' },
  onClick: { type: 'text', label: 'On Click Action', defaultValue: '' },
};

export default ButtonComponent;