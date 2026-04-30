// &&
// ||
// !

// age should above 10
// age should below 18
// age can be 20

// (10 < age && age < 18) || age === 20
// (T && F) || T
// F || T
// T
// let age = 20

// let ans = 10 < age && age < 18
/*
for age 9

10 < 9 && 9 < 18

F && T => F
F && F => F
T && F => F
T && T => T

*/

// let age = 18

// let ans = 10 === age || age < 18
/*

F || T => T
T || F => T
T || T => T
F || F => F


*/
// console.log("-----ans----->",ans)

// false => 0,

// 

let x = ""; // false, "", undefined, null, 0 // falsy value

let ans = !x;
console.log("🚀 ~ ans:", ans);

let obj = { a: 20, b: 30 };

// let a = obj.a
// let b = obj.b

let { a, b } = obj;
