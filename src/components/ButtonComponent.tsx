import React from 'react';

const ButtonComponent = () => {
  return <div>Button Component</div>;
};

export const buttonComponentProperties = {
  title: { type: 'text', label: 'Title', value: '' },
  onClick: { type: 'text', label: 'On Click Action', value: '' },
};

export default {
  name: 'ButtonComponent',
  component: ButtonComponent,
  properties: buttonComponentProperties,
};