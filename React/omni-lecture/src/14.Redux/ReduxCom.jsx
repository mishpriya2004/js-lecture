import React, { useState } from "react";
import ComponentA from "./ComponentA";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function ReduxCom() {
  let [name, setName] = useState("Urvish");
  return (
    <div>
      <Provider store={store}>
        <ComponentA />
      </Provider>
    </div>
  );
}
