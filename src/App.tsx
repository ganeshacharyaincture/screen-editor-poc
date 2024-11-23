// import React, { useState } from 'react';
import Container from './Container';
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "./main.tsx";
import {addContainer} from "./redux/container.ts"

const App = () => {
  // const [containers, setContainers] = useState([]);
  const containers = useSelector((state: RootState) => state.container.containers)
  const dispatch = useDispatch()

  const addContainerAction = () => {
    // setContainers([...containers, { id: Date.now(), components: [] }]);
    dispatch(addContainer({ id: Date.now(), components: [] }))
  };

  return (
    <div>
      <button onClick={addContainerAction}>Add Container</button>
      {containers.map(container => (
        <Container key={container.id} />
      ))}
    </div>
  );
};

export default App;