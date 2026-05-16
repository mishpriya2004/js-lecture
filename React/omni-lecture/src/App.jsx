import { MyFirstComponent } from "./MyFirstComponent";
import Test from "./MySecondComponent";

const MySecondComponent = "hello"

function App() {

  return (
    <>
      <h1>Custome rtag</h1>
      <MyFirstComponent></MyFirstComponent>
      <MyFirstComponent />
      <MySecondComponent/>
    </>
  );
}

export default App;
