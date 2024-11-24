import React, { useState } from 'react';
import { loadComponents } from './loadComponents';
import ComponentItem from './ComponentItem';
import {useDispatch, useSelector} from "react-redux";
import {addComponent} from "./redux/component"
import {upsertComponent} from "./redux/container";

import type {RootState} from "./main.tsx";

type ContainerProps = {
    containerId: number
}
const Container: React.FC<ContainerProps> = ({containerId}) => {
  const components = useSelector((state: RootState) => state.container.containers.find(c => c.id === containerId)?.components || [])
  const dispatch = useDispatch()
  const [selectedComponent, setSelectedComponent] = useState('');

  const availableComponents = loadComponents();

  const addComponentz = () => {
    const componentToAdd = availableComponents.find(comp => comp.name === selectedComponent);
    if (componentToAdd) {
      const newComponent = {
        id: Date.now(),
        type: componentToAdd.name,
        component: componentToAdd.component,
        properties: componentToAdd.properties,
      };
      dispatch(addComponent({containerId, component:{...newComponent}}))
      // dispatch(upsertComponent({containerId, component: {...newComponent} }))
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
      <button onClick={addComponentz}>Add Component</button>
      {components.map(component => (
        <ComponentItem key={component.id} component={component} properties={component.properties} />
      ))}
    </div>
  );
};

export default Container;