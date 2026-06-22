import React from "react";
import ComponentB from "./ComponentB";


export default function ComponentA({ stage1 }) {
  return (
    <div>
      <ComponentB stage2={stage1}/>
    </div>
  );
}
