import { Button } from "@/components/ui/button";
import React, { useState } from "react";

// let x = { a: 20, b: 40 };
// console.log("🚀 ~ x:before", x);
// x = { ...x, b: 400 };
// console.log("🚀 ~ x:after", x);

export default function UseStateObj() {
  let [obj, setObj] = useState({ a: 20, b: 50 }); // [200, function]
  console.log("🚀 ~ UseStateObj ~ obj:", obj);

  const clickHandler = () => {
    setObj({ ...obj, b: 500 });
  };

  return (
    <div className="bg-yellow-300 w-screen h-screen flex justify-center items-center flex-col">
      <h1 className="text-3xl">No A : {obj.a}</h1>
      <h1 className="text-3xl">No B : {obj.b}</h1>
      <Button onClick={() => clickHandler()}>Increment</Button>
      {/* <Button onClick={clickHandler}>Increment</Button> */}
    </div>
  );
}
