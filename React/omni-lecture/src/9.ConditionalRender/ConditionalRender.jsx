import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

export default function ConditionalRender() {
  let [count, setCount] = useState(0);
  let Incriment = () => {
    setCount(count + 1);
  };

  if (count === 10) {
    return (
      <div className="flex items-center flex-col p-12 ">
        <h1>Game is over</h1>
      </div>
    );
  }

  //   useEffect(() => {
  //     console.log("-=-=-=->");
  //   }, []);

  return (
    <div className="flex items-center flex-col p-12 ">
      <h1>This incriment value : {count}</h1>
      <Button onClick={() => Incriment()}> Incriment</Button>

      {count % 2 === 0 ? <h1>Count is Even</h1> : <h1>Count is odd</h1>}
    </div>
  );
}

function test(params) {
  if (true) {
    return;
  }
  return;
}
