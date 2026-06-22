import React from "react";
import ComponentC from "./ComponentC";
import ComponentB2 from "./ComponentB2";

export default function ComponentB({ stage2 }) {
  return (
    <div>
      <ComponentC stage3={stage2} />
      <ComponentB2/>
    </div>
  );
}
