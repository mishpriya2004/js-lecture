import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

export default function EveryTimeAndOnStateChange() {
  let [no, setNo] = useState(0);
  let [no2, setNo2] = useState(10);

  // everytime : without depenedency
  useEffect(() => {
    console.log("------: no Dependency: every time------");
  });

  // on change of state and variable : here it will call on change of "no" state

  useEffect(() => {
    console.log(
      "------: with 'no' Dependency: first time + on change of depenedency time------",
    );
  }, [no, no2]);

  // First time

  useEffect(() => {
    console.log("------: [] Dependency: first time only------");
  }, []);
  return (
    <div className="flex justify-center flex-col items-center text-2xl">
      <div className="flex">
        <h1>No : {no}</h1>
        <Button onClick={() => setNo(no + 1)}>Inc</Button>
      </div>
      <div className="flex">
        <h1>No2 : {no2}</h1>
        <Button onClick={() => setNo2(no2 + 1)}>Inc</Button>
      </div>
    </div>
  );
}

// Mounting -> Updating -> Unmounting
