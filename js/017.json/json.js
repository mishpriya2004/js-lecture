// json

let user = {
  name: "urvish",
  age: 27,
};
// console.log("🚀 ~ user:", user)

let jsonString = JSON.stringify(user)
// console.log("🚀 ~ jsonString:", jsonString)

let string =  '{"name":"urvish","age":27}'

let normalData = JSON.parse(string)
console.log("🚀 ~ normalData:",typeof normalData)


