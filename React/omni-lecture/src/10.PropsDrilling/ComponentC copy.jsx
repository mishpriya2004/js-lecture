import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

let userData = [{a:20}];
export default function ComponentC({ stage3 }) {
  console.log("🚀 ~ ComponentC ~ stage3:", stage3);
  let [name, setName] = useState(stage3);
  let [flag,setflag] = useState(true)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        userData = data;
        setflag(false)
      });
  }, []);

  return (
    <div>
      ComponentC
      <h1>Props value is {stage3}</h1>
      <h1>My name is {name}</h1>
      <Button onClick={() => setName("Raj")}>Change value to Raj</Button>
      {userData.map((e) => {
        return <h1>{JSON.stringify(userData)}</h1>;
      })}
    </div>
  );
}
