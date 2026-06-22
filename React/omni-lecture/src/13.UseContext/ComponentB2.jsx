import React, { useContext } from "react";
import { UserDataContext } from "./UseContextCom";
import { Button } from "@/components/ui/button";

export default function ComponentB2() {
  let dataB2 = useContext(UserDataContext);

  const changeNameHandler = () => {
    dataB2.setName("Yashvi");
  };

  console.log("🚀 ~ ComponentB2 ~ dataB2:", dataB2);
  return (
    <div>
      <Button onClick={() => changeNameHandler()}>Change name to Yashvi</Button>
    </div>
  );
}
