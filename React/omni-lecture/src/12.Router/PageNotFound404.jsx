import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function PageNotFound404() {
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/about-us");
  };
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-orange-500">
      PageNotFound404
      <Button onClick={() => backToHome()}>Back to Home</Button>
    </div>
  );
}
