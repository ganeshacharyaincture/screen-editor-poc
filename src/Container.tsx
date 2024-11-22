import React, { useState } from 'react';
import { loadComponents } from './loadComponents';
import ComponentItem from './ComponentItem';

const Container = () => {
  const [components, setComponents] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState('');

  const availableComponents = loadComponents();
  console.log(availableComponents);

  const addComponent = () => {
    const componentToAdd = availableComponents.find(comp => comp.name === selectedComponent);
    console.log(componentToAdd)
    if (componentToAdd) {
      const newComponent = {
        id: Date.now(),
        type: componentToAdd.name,
        component: componentToAdd.component,
        properties: componentToAdd.properties,
        // properties: componentToAdd.proper
      };
      setComponents([...components, newComponent]);
      setSelectedComponent(''); // Reset selection
    }
  };

  return (
    <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
      <h3>Container</h3>
      <select value={selectedComponent} onChange={(e) => setSelectedComponent(e.target.value)}>
        <option value="">Select a component</option>
        {availableComponents.map(comp => (
          <option key={comp.name} value={comp.name}>{comp.name}</option>
        ))}
      </select>
      <button onClick={addComponent}>Add Component</button>
      {components.map(component => (
        <ComponentItem key={component.id} component={component} properties={component.properties} />
      ))}
    </div>
  );
};

export default Container;