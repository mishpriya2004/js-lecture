import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

export default function SimpleCrud() {
  let [task, setTask] = useState("");
  let [taskList, setTaskList] = useState([]);
  console.log("🚀 ~ SimpleCrud ~ taskList:", taskList);
  const onChangeHandler = (e) => {
    setTask(e.target.value);
  };

  const addTaskHandler = () => {
    console.log("-=-=-=-=->");
    setTaskList([...taskList, task]);
    setTask("");
  };

  const deleteHandler = (index) => {
    console.log("----delete handler ----", index);
    let filterData = taskList.filter((e, i) => {
      return i !== index;
    });
    setTaskList(filterData);
  };

  return (
    <div className="flex items-center flex-col p-12 ">
      <div className="flex gap-2">
        <Input
          // onChange={(e) => {
          //   return onChangeHandler(e);
          // }}
          value={task}
          onChange={(e) => onChangeHandler(e)}
          id="input-demo-api-key"
          className="max-w-52"
          type="text"
          placeholder="sk-..."
        />
        <Button onClick={() => addTaskHandler()} className="cursor-pointer">
          Add Task
        </Button>
      </div>
      <h1>task : {task}</h1>

      <ul itemType="list">
        {taskList.map((e, i) => {
          return (
            <div className="flex">
              <li key={i}>
                {i + 1}. {e}
              </li>
              <Button
                className="bg-red-500 cursor-pointer"
                onClick={() => deleteHandler(i)}
              >
                Delete
              </Button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

// let fun1 = () => {};

// fun1();


// name , car, brand , vegetable