import React, { useState } from 'react';
import Container from './Container';

const App = () => {
  const [containers, setContainers] = useState([]);

  const addContainer = () => {
    setContainers([...containers, { id: Date.now(), components: [] }]);
  };

  return (
    <div>
      <button onClick={addContainer}>Add Container</button>
      {containers.map(container => (
        <Container key={container.id} container={container} />
      ))}
    </div>
  );
};

export default App;