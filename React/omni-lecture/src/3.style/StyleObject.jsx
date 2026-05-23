import React from "react";

export default function StyleObject() {
  let styleObj = { color: "green",fontSize:"50px" };
  return (
    <div>
      <h1
        style={{
          color: "red",
          fontFamily: "cursive",
          backgroundColor: "yellow",
        }}
      >
        Urvish Patel
      </h1>
      <h2 style={styleObj}>Test</h2>
    </div>
  );
}
