import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

export default function ComponentC({ stage3 }) {
  console.log("🚀 ~ ComponentC ~ stage3:", stage3);
  let [name, setName] = useState(stage3);

  return (
    <div>
      ComponentC
      <h1>Props value is {stage3}</h1>
      <h1>My name is {name}</h1>
      <Button onClick={() => setName("Raj")}>Change value to Raj</Button>
    </div>
  );
}
