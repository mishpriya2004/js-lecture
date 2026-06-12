import React from "react";
import ComponentB from "./ComponentB";

let x = { a: 20, b: 40 };

let { a } = x;
export default function ComponentA({ stage1 }) {
  console.log("🚀 ~ ComponentA ~ stage1:", stage1)
  return (
    <div>
      <ComponentB stage2={stage1}/>
    </div>
  );
}
