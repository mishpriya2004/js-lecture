import React, { useState } from 'react'
import ChildCom from './ChildCom'

export default function ParentCom() {
let [x,setX] = useState("")

  const getName = (name)=>{
    console.log("-----fun---call-----",name)
    setX(name)
  }

  return (
    <div>ParentCom
      <h1>My name is {x}</h1>
      <ChildCom getName={getName}/>
    </div>
  )
}
