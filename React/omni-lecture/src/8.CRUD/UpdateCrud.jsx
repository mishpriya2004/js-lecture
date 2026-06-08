import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

export default function UpdateCrud() {
  let [name, setName] = useState("");
  let [nameList, setNameList] = useState([]);
  let [index, setIndex] = useState(null);

  const onChangeHandler = (e) => {
    setName(e.target.value);
  };

  // add name to array so we can see name in display
  const addNameHandler = () => {
    setNameList([...nameList, name]); // we are used [], because we need to give array 
    setName("");
  };

  const updateClickHandler = (e, i) => {
    console.log("--=-=-=->", e, i);
    setIndex(i);
    setName(e);
  };

  const updateHandler = () => {
    console.log("--=-=-=->update");

    // index
    // arr => nameList
    // newValue => name state
    if (index !== null) {
      nameList.splice(index, 1, name);
      setNameList([...nameList]);
      setIndex(null);
      setName("");
    }
  };
  return (
    <div className="flex items-center flex-col p-12 ">
      <div className="flex gap-2">
        <Input
          value={name}
          onChange={(e) => onChangeHandler(e)}
          id="input-demo-api-key"
          className="max-w-52"
          type="text"
          placeholder="sk-..."
        />

        {true ? (
          <Button onClick={() => updateHandler()} className="cursor-pointer">
            Update name
          </Button>
        ) : (
          <Button onClick={() => addNameHandler()} className="cursor-pointer">
            Add name
          </Button>
        )}
      </div>
      <h1>name : {name}</h1>
      <h1>index: {typeof index}</h1>

      <ul itemType="list">
        {nameList.map((e, i) => {
          return (
            <div className="flex">
              <li key={i}>
                {i + 1}. {e}
              </li>
              <Button
                className="bg-blue-500 cursor-pointer"
                onClick={() => updateClickHandler(e, i)}
              >
                Update
              </Button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

/*
<div>
    <li key={0}> task1</li>
    <Button onClick={()=>updateClickHandler("task1",0)}>Update</Button>
</div>
 <div>
    <li key={1}>task2</li>
    <Button onClick={()=>updateClickHandler("task2",1)}>Update</Button>
</div>
<div>
    <li key={2}>task3</li>
    <Button onClick={()=>updateClickHandler("task3",2)}>Update</Button>
</div>
 <div>
    <li key={3}>task4</li>
    <Button onClick={()=>updateClickHandler("task4",3)}>Update</Button>
</div>

            */
