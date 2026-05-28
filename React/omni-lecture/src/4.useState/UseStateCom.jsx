import { Button } from "@/components/ui/button";
import React, { useState } from "react";

// let no = {a:200}
// no.a

// let y = 200;
// y = 600;
// let arr = [100, 200];
// let [a, b] = arr;

export default function UseStateCom() {
  let [count, setCount] = useState(100); // [100, function]

  const incrementHandler = () => {
    setCount(count + 1);
    console.log("--------->", count);
  };
  return (
    <div className="bg-yellow-300 w-screen h-screen flex justify-center items-center flex-col">
      <h1 className="font-bold text-2xl">Count : {count}</h1>
      <Button onClick={() => incrementHandler()}>Increment</Button>
      {/* <Button onClick={incrementHandler}>Increment</Button> */}
    </div>
  );
}
// export default function UseStateCom() {
//   let no = 100;

//   const incrementHandler = ()=>{
//       no = no + 1
//       console.log("--------->",no)
//   }
//   return (
//     <div className="bg-yellow-300 w-screen h-screen flex justify-center items-center flex-col">
//       <h1 className="font-bold text-2xl">Count : {no}</h1>
//       <Button onClick={incrementHandler} >Increment</Button>
//     </div>
//   );
// }
