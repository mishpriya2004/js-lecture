import { Button } from "@/components/ui/button";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function ComponentC() {
  let countDataSlice = useSelector((state) => {
    console.log("🚀 ~ ComponentC ~ state:", state);
    return state.countSlice
  });
  console.log("🚀 ~ ComponentC ~ countDataSlice:", countDataSlice)
  return (
    <div>
      ComponentC
      <h1>Count value is {countDataSlice.no1}</h1>
    </div>
  );
}
