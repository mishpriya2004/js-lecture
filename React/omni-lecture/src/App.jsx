import { MyFirstComponent } from "./1.component/MyFirstComponent";
import Test from "./1.component/MySecondComponent";
import { MapAndKey } from "./2.MapKey/MapAndKey";
import ShadCnFile from "./3.style/ShadCnFile";
import StyleFile from "./3.style/StyleFile";
import StyleObject from "./3.style/StyleObject";
import TailwindCss from "./3.style/TailwindCss";
import UseStateCom from "./4.useState/UseStateCom";

import UseStateObj from "./4.useState/UseStateObj";
import MainProps from "./5.Props/MainProps";


function MySecondComponent() {
  return <h1>Hello</h1>;
}

function App() {
  return (
    <>
      {/* ------------------------- COMPONENT ---------------------------------- */}

      {/* <h1>Custom tag</h1>
      <MyFirstComponent />
      <MySecondComponent /> */}

      {/* ------------------------- MAP AND KEY ---------------------------------- */}
      {/* <MapAndKey /> */}

      {/* ------------------------- STYLE ---------------------------------- */}
      {/* <StyleObject /> */}
      {/* <StyleFile /> */}
      {/* <TailwindCss /> */}
      {/* <ShadCnFile /> */}

      {/* ------------------------- USE STATE ---------------------------------- */}
      {/* <UseStateCom /> */}
      {/* <UseStateObj /> */}

      {/* ------------------------- PROPS ---------------------------------- */}
      <MainProps />

      <UseStateCom />
    </>
  );
}

export default App;


