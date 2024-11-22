import React from 'react';

const TextComponent = () => {
  return <div>Text Component</div>;
};

export const textComponentProperties = {
  title: { type: 'text', label: 'Title', defaultValue: '' },
  type: { type: 'text', label: 'Type', defaultValue: '' },
  value: { type: 'text', label: 'Value', defaultValue: '' },
  color: { type: 'color', label: 'Color', defaultValue: '#000000' },
};

export default TextComponent;