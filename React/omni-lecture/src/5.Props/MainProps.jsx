import React from "react";
import UserNameCard from "./UserNameCard";

const NAME = ["Urvish", "Jay", "Raj"];

export default function MainProps() {
  return (
    <div className="bg-yellow-300 w-screen h-screen flex justify-center items-center flex-col">
      {NAME.map((e,i) => {
        return <UserNameCard key={i} name={e} index={i}/>;
      })}
    </div>
  );
}
