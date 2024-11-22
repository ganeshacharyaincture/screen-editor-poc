import React from 'react';

const CheckboxComponent = () => {
  return <div>Checkbox Component</div>;
};

export const checkboxComponentProperties = {
  title: { type: 'text', label: 'Title', value: '' },
  checked: { type: 'boolean', label: 'Checked', value: false },
};

export default {
  name: 'CheckboxComponent',
  component: CheckboxComponent,
  properties: checkboxComponentProperties,
};