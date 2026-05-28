import { Button } from "@/components/ui/button";
import React, { useState } from "react";

// let no = {a:200}
// no.a

export default function UseStateCom() {
  let [count, setCount] = useState(100);
  let [no, setNo] = useState({ a: 200 });
  console.log("🚀 ~ UseStateCom ~ no:", no)

  const incrementHandler = () => {
    setCount(count + 1);
    console.log("--------->", count);
  };
  return (
    <div className="bg-yellow-300 w-screen h-screen flex justify-center items-center flex-col">
      <h1 className="font-bold text-2xl">Count : {count}</h1>
      <h1 className="font-bold text-2xl">Count2 : {no.a}</h1>
      <Button onClick={incrementHandler}>Increment</Button>
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
