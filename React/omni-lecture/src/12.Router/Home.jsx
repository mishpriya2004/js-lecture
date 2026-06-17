import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const redirectHandler = (user) => {
    navigate(`/user/${user}`);
  };

  // console.log("----Component rendered---->")

  return (
    <div className="home w-full h-screen  flex-col flex justify-center items-center bg-green-500">
      Home
      <div>
        <Button onClick={() => redirectHandler("yashvi")}>Y</Button>
        <Button  onClick={() => redirectHandler("bansi")}>B</Button>
      </div>
    </div>
  );
}
