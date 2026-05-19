import { MyFirstComponent } from "./1.component/MyFirstComponent";
import Test from "./1.component/MySecondComponent";
import { MapAndKey } from "./2.MapKey/MapAndKey";

const MySecondComponent = "hello";

function App() {
  return (
    <>
      {/* ------------------------- COMPONENT ---------------------------------- */}
      {/* <h1>Custome rtag</h1>
      <MyFirstComponent></MyFirstComponent>
      <MyFirstComponent />
      <MySecondComponent/> */}

      {/* ------------------------- MAP AND KEY ---------------------------------- */}
      <MapAndKey />
    </>
  );
}

export default App;
