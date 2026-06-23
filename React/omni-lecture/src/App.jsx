import { BrowserRouter } from "react-router-dom";
import { MyFirstComponent } from "./1.component/MyFirstComponent";
import Test from "./1.component/MySecondComponent";
import PropsDrilling from "./10.PropsDrilling/PropsDrilling";
import ParentCom from "./11.LiftingStateUp/ParentCom";
import MainComponent from "./12.Router/MainComponent";
import { MapAndKey } from "./2.MapKey/MapAndKey";
import ShadCnFile from "./3.style/ShadCnFile";
import StyleFile from "./3.style/StyleFile";
import StyleObject from "./3.style/StyleObject";
import TailwindCss from "./3.style/TailwindCss";
import UseStateCom from "./4.useState/UseStateCom";

import UseStateObj from "./4.useState/UseStateObj";
import MainProps from "./5.Props/MainProps";
import EveryTimeAndOnStateChange from "./6.UseEffect/EveryTimeAndOnStateChange";
import UseEffectProje from "./6.UseEffect/UseEffectProje";
import ApiCall from "./7.API/ApiCall";
import AxiosFetch from "./7.API/AxiosFetch";
import LocalStorage from "./8.CRUD/LocalStorage";
import SimpleCrud from "./8.CRUD/SimpleCrud";
import UpdateCrud from "./8.CRUD/UpdateCrud";
import ConditionalRender from "./9.ConditionalRender/ConditionalRender";
import UseContextCom from "./13.UseContext/UseContextCom";
import CheckBoxInput from "./8.CRUD/CheckBoxInput";
import RadioValue from "./8.CRUD/RadioValue";

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
      {/* <MainProps />
      <UseStateCom /> */}

      {/* ------------------------- USE-EFFECT ---------------------------------- */}
      {/* <EveryTimeAndOnStateChange/> */}
      {/* <UseEffectProje/> */}

      {/* ------------------------- API  ---------------------------------- */}
      {/* <ApiCall/> */}
      {/* <AxiosFetch /> */}

      {/* ------------------------- CRUD  ---------------------------------- */}
      {/* <SimpleCrud/> */}
      {/* <UpdateCrud/> */}
      {/* <CheckBoxInput/> */}
      <RadioValue/>


      {/* ------------------------- BROWSER STORAGE  ---------------------------------- */}
      {/* <LocalStorage/> */}

      {/* ------------------------- CONDITIONAL RENDER  ---------------------------------- */}
      {/* <ConditionalRender/> */}

      {/* ------------------------- PROPS DRILLING  ---------------------------------- */}
      {/* <PropsDrilling/> */}

      {/* ------------------------- LIFTING STATE UP  ---------------------------------- */}
      {/* <ParentCom/> */}

      {/* ------------------------- ROUTER  ---------------------------------- */}
      {/* <BrowserRouter> */}
      {/* <MainComponent/> */}
      {/* </BrowserRouter> */}

      {/* ------------------------- USE REDUCER  ---------------------------------- */}
      {/* <UseContextCom/> */}
    </>
  );
}

export default App;
