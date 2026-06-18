import React from "react";

export default function WraperComponent({ children }) {
  console.log("🚀 ~ WraperComponent ~ WraperComponent:");

  return <div className="wrapComponentClass">{children}</div>;
}
