import React from "react";
import ComponentC from "./ComponentC";

export default function ComponentB({ stage2 }) {
  console.log("🚀 ~ ComponentB ~ stage2:", stage2);
  return (
    <div>
      <ComponentC stage3={stage2} />
    </div>
  );
}
