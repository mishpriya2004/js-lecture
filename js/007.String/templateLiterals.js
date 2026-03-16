// template literals -> `${expression}`

let p1_age = 29;
let p2_age = 30;

console.log("my age is p1_age");

console.log(`My name is ${p2_age}`);

let students = ["Manoj", "Sahil", "Rekha"];

for (let i = 0; i < students.length; i++) {
  let string = `My Self ${students[i]}. I am stuent At Omni`;
  console.log("------>", string);
}

let x = 90;
let y = 50;

let ans = `Sum of x and y =  ${x + y}`;
console.log("🚀 ~ ans:", ans);
