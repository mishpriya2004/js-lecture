import React, { useState } from 'react'

export default function ChildCom({getName}) {
  
  const [name,setName]= useState("Urvish")

  getName(name)
  return (
    <div>ChildCom</div>
  )
}
