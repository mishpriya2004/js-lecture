// array, object

let numbers = [10, 20, 30, 40, 50];

/*
when property has multiple value we can use array

0 -> 10
1 -> 20
2 -> 30
3 -> 40
4 -> 50

to access value 
variableName[index]

*/

let a = 1;

// console.log("------->",numbers[0])

// object
/*
let objectName = {
    key : value,
    key : value
}

to access value
variableName.key
*/

let user = {
  name: "urvish",
  age: 26,
  city: "surat",
  isAbove30: false,
  hobby: ["playing cricket", "hicking"],
};

console.log("----obj--before-->", user);

user.gender = "male";

console.log("----obj--after-->", user);

// console.log("🚀 ~ user.hobby:", user.hobby)
// console.log("🚀 ~ user.age:", user.age)
// console.log("🚀 ~ user.name:", user.name)

let color = {
  10: "red",
  20: "green",
  30: "yellow",
};

// color.20
// console.log("🚀 ~ color[20]:", color[20])
