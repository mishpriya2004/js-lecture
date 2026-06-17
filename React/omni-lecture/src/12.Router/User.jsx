import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const paramsData = useParams();
  console.log("🚀 ~ User ~ paramsData:", paramsData);
  return (
    <div className="w-full h-screen flex-col flex justify-center items-center bg-blue-500">
      <div className="text-4xl">
        {paramsData.userId === "yashvi" ? <h1>Yashvi</h1> : <h1>Bansi</h1>}
      </div>
    </div>
  );
}
