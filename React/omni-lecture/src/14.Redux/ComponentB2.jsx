import React from "react";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { counterSliceAction } from "./redux/slice/counterSlice";

export default function ComponentB2() {
  const dispatch = useDispatch();
  const incrementHandler = () => {
    console.log("increment");
    dispatch(counterSliceAction.increment());
  };
  return (
    <div>
      <Button onClick={() => incrementHandler()}>Increment</Button>
      <Button onClick={() => dispatch(counterSliceAction.decrement())}>Decrement</Button>
    </div>
  );
}
