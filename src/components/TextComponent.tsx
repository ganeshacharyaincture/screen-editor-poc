import React from 'react';

const TextComponent: React.FC = () => {
  return <div>Text Component</div>;
};

export const textComponentProperties = {
  title: { type: 'text', label: 'Title', value: '' },
  type: { type: 'text', label: 'Type', value: '' },
  value: { type: 'text', label: 'Value', value: '' },
  color: { type: 'color', label: 'Color', value: '#000000' },
};

export default {
  name: 'CheckboxComponent',
  component: TextComponent,
  properties: textComponentProperties,
};