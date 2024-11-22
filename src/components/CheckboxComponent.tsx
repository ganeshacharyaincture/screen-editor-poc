import React from 'react';

const CheckboxComponent = () => {
  return <div>Checkbox Component</div>;
};

export const checkboxComponentProperties = {
  title: { type: 'text', label: 'Title', defaultValue: '' },
  checked: { type: 'boolean', label: 'Checked', defaultValue: false },
};

export default CheckboxComponent;