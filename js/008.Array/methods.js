/*
Methods : push()
Use : add element at end
Behaviour : change existing array

let arr = [1, 2, 3];
console.log("🚀 ~ arr:---before--->", arr)
arr.push(4,5)
console.log("🚀 ~ arr:---After--->", arr)

*/

/*
Methods : pop()
Use: remove element from end
Behaviour : change existing array

let arr = [1, 2, 3];
console.log("🚀 ~ arr:---before--->", arr)
arr.pop()
console.log("🚀 ~ arr:---After--->", arr)

*/

/*
Methods : unshift()
Use: add element at start
Behaviour : change existing array


let arr = [1, 2, 3];
console.log("🚀 ~ arr:---before--->", arr)
arr.unshift(0.5,0)
console.log("🚀 ~ arr:---After--->", arr)

*/

/*
Methods : shift()
Use: remove element from start
Behaviour : change existing array

let arr = [1, 2, 3];
console.log("🚀 ~ arr:---before--->", arr)
arr.shift()
console.log("🚀 ~ arr:---After--->", arr)

*/

/*
Method : includes() 
Use : checks if value exists
Behaviour : return boolean value

let student = ["Manoj", "Shuresh", "jay", "Komal"];

let ans = student.includes("Mmanoj");

// console.log("🚀 ~ ans:", ans)

if (ans) { // false, "", 0, undefined, null
    console.log("student is available");
} else {
    console.log("student is absenet");
}

*/

/*
Method : indexOf() 
Use : finds position of value, start from begining
Behaviour : return number(index) value
- if given value not available it returns -1
- it gives first matching element's index from start 


let student = ["Manoj", "Shuresh", "jay", "Komal","Manoj"];

let index = student.indexOf("Manoj")
console.log("🚀 ~ index:", index)
*/

/*
Method : lastIndexOf() 
Use : finds position of value, start from end
Behaviour : return number(index) value
- if given value not available it returns -1
- it gives first matching element's index from last


let student = ["Manoj", "Shuresh", "jay", "Komal"];
let index = student.lastIndexOf("Manojj")
console.log("🚀 ~ index:", index)

*/

/*
Method : sort() 
Use : sorts array
Behaviour : change existing array


let arr = [1, 5, 2, 8, 5, 9, 0.5, 0 ];

console.log("🚀 ~ arr:---before--->", arr)
arr.sort();

console.log("🚀 ~ arr:---After--->", arr)

*/

/*
Method : reverse() 
Use : reverses array
Behaviour : change existing array


let student = ["Manoj", "Shuresh", "jay", "Komal"];
student.reverse()
console.log("🚀 ~ student:", student)
*/

/*
Method : join() 
Use : converts array to string
Behaviour : return a string value
*/

let student = ["Manoj", "Shuresh", "jay", "Komal", 900];

let string1 = student.toString();
console.log("🚀 ~ string1:", string1);
let string2 = student.join();
console.log("🚀 ~ string2:", string2);
