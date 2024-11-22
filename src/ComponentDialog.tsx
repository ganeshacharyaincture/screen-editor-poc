import React, { useState } from 'react';

const ComponentDialog = ({ component, onClose }) => {
  const [properties, setProperties] = useState(component.properties);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setProperties({ ...properties, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated properties:', properties);
    onClose();
  };

  return (
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', border: '1px solid black' }}>
      <h4>Edit {component.type} Component</h4>
      <form onSubmit={handleSubmit}>
        {Object.keys(properties).map(key => {
          const property = properties[key];
          return (
            <div key={key}>
              <label>
                {property.label}:
                {property.type === 'boolean' ? (
                  <input type="checkbox" name={key} checked={properties[key]} onChange={handleChange} />
                ) : (
                  <input type={property.type} name={key} value={properties[key]} onChange={handleChange} />
                )}
              </label>
            </div>
          );
        })}
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default ComponentDialog;