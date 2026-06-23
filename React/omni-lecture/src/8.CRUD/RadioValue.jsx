import React, { useState } from "react";

export default function RadioValue() {
let [gender,setGender] = useState("male")


const onChangeHandler = (clickGender)=>{
    console.log("------>",clickGender)
    setGender(clickGender)
}

  return (
    <div className="p-[100px]">
      <h1>RadioValue</h1>
      <input type="radio" checked={gender==="male"} onChange={()=>onChangeHandler("male")} /> Male
      <br />
      <input type="radio" checked={gender==="female"} onChange={()=>onChangeHandler("female")} /> Female
      <br />
      <input type="radio" checked={gender==="other"} onChange={()=>onChangeHandler("other")} /> Other
      <br />
      <h1>Gender : {gender}</h1>
    </div>
  );
}
