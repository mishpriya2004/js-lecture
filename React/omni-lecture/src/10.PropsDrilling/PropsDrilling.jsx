import React, { useState } from "react";
import ComponentA from "./ComponentA";

// storage 
// assign (wrap)

// PropsDrilling -> ComponentA -> ComponentB -> ComponentC

//  problem => high complexity, high load 

// solution => useContext/contextApi , redux

export default function PropsDrilling() {
  let [name, setName] = useState("Urvish");
  return (
    <div>
      <ComponentA stage1={name} />
    </div>
  );
}
