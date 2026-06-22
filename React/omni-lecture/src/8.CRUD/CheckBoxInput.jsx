import { Input } from "@/components/ui/input";
import React, { useState } from "react";

export default function CheckBoxInput() {
    let [hobby,setHobby]=useState(["dancing"])

    const onChangeHandler = (clickedHoobyName,e)=>{
    console.log("🚀 ~ onChangeHandler ~ e:", e)

        console.log("----->",clickedHoobyName)
        if(e.target.checked){
            // null, undefined,false,0,""
            setHobby([...hobby,clickedHoobyName])

        }else {
            let filterData= hobby.filter((h)=>h!==clickedHoobyName)
            console.log("🚀 ~ onChangeHandler ~ filterData:", filterData)
            setHobby(filterData)
        }

    }
  return (
    <div className="p-[100px]">
        <h1>Hobby</h1>
      <input type="checkbox" checked={hobby.includes("dancing")} onChange={(e)=>onChangeHandler("dancing",e)} /> Dancing
      <br />
      <input type="checkbox"  checked={hobby.includes("swimming")} onChange={(e)=>onChangeHandler("swimming",e)} /> Swimming
      <br />
      <input type="checkbox"  checked={hobby.includes("running")} onChange={(e)=>onChangeHandler("running",e)} /> Running

      <h1>Hooby : {hobby}</h1>
    </div>
  );
}
