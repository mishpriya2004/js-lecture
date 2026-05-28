import React from 'react'

export default function UserNameCard(props) {
  console.log("🚀 ~ UserNameCard ~ props:", props)
  // props.name = 900
  return (
    <div>
      <h1>Index : {props.index}</h1>
      <h1>Name : {props.name}</h1>
    </div>
  )
}
