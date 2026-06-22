import React, { createContext, useState } from "react";
import ComponentA from "./ComponentA";

export const UserDataContext = createContext();

export default function UseContextCom() {
  let [name, setName] = useState("Urvish");
  return (
    <div>
      <UserDataContext.Provider value={{age:26,name:"",setName:setName}} >
        <ComponentA stage1={name} />
      </UserDataContext.Provider>
    </div>
  );
}
