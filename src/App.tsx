import Container from './Container';
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "./main.tsx";
import {addContainer} from "./redux/container"

const App = () => {
  const containers = useSelector((state: RootState) => state.container.containers)
  const dispatch = useDispatch()

  const addContainerAction = () => {
    dispatch(addContainer({ id: Date.now(), components: [] }))
  };

  return (
    <div>
      <button onClick={addContainerAction}>Add Container</button>
      {containers.map(container => (
        <Container key={container.id} containerId={container.id} />
      ))}
    </div>
  );
};

export default App;