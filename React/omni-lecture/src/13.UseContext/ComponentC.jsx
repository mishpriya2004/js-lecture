import { Button } from "@/components/ui/button";
import React, { useContext, useEffect, useState } from "react";
import { UserDataContext } from "./UseContextCom";

export default function ComponentC({ stage3 }) {
const data = useContext(UserDataContext)
  console.log("🚀 ~ ComponentC ~ data:", data)
  return (
    <div>
      ComponentC
      <h1>Props value is {stage3}</h1>
    </div>
  );
}
