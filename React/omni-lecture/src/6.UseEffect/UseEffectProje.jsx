import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

export default function UseEffectProje() {
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(10);

  useEffect(() => {
    if (count % 4 === 0 && count !== 0) {
      alert("Current count's value is devide by 5");
    }
    // confirm("confirm")
    // prompt("prompt")
  }, [count]);

  useEffect(() => {
    if (count2 % 10 === 0 && count2 !== 10) {
      alert("Current count2's value is devide by 10------>");
    }
  }, [count2]);

  useEffect(() => {
    if (count === count2) {
      alert("Both's value are same , count === count2 ");
    }
  }, [count, count2]);

  return (
    <div className="bg-yellow-300 w-screen h-screen flex justify-center items-center flex-col">
      <h1 className="font-bold text-2xl">Count : {count}</h1>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>

      <h1>------------------------------------------</h1>
      <h1 className="font-bold text-2xl">Count2 : {count2}</h1>
      <Button onClick={() => setCount2(count2 + 1)}>Increment</Button>
    </div>
  );
}
