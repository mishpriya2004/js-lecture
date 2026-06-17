import React from "react";

export default function WraperComponent({ children }) {
  console.log("🚀 ~ WraperComponent ~ WraperComponent:");
  console.log("----Component rendered---->")

  return <div className="wrapComponentClass">{children}</div>;
}
