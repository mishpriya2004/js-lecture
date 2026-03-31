/*
Methods : push()
Use : add element at end
Behaviour : change existing array

let arr = [1, 2, 3];
console.log("🚀 ~ arr:---before--->", arr)
arr.push(4,5)
console.log("🚀 ~ arr:---After--->", arr)

*/

//-----------------------------------------------------------------------------------

/*
Methods : pop()
Use: remove element from end
Behaviour : change existing array

let arr = [1, 2, 3];
console.log("🚀 ~ arr:---before--->", arr)
arr.pop()
console.log("🚀 ~ arr:---After--->", arr)

*/

//-----------------------------------------------------------------------------------

/*
Methods : unshift()
Use: add element at start
Behaviour : change existing array


let arr = [1, 2, 3];
console.log("🚀 ~ arr:---before--->", arr)
arr.unshift(0.5,0)
console.log("🚀 ~ arr:---After--->", arr)

*/

//-----------------------------------------------------------------------------------

/*
Methods : shift()
Use: remove element from start
Behaviour : change existing array

let arr = [1, 2, 3];
console.log("🚀 ~ arr:---before--->", arr)
arr.shift()
console.log("🚀 ~ arr:---After--->", arr)

*/

//-----------------------------------------------------------------------------------

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

//-----------------------------------------------------------------------------------

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

//-----------------------------------------------------------------------------------

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

//-----------------------------------------------------------------------------------

/*
Method : sort() 
Use : sorts array
Behaviour : change existing array


let arr = [1, 5, 2, 8, 5, 9, 0.5, 0 ];

console.log("🚀 ~ arr:---before--->", arr)
arr.sort();

console.log("🚀 ~ arr:---After--->", arr)

*/

//-----------------------------------------------------------------------------------

/*
Method : reverse() 
Use : reverses array
Behaviour : change existing array


let student = ["Manoj", "Shuresh", "jay", "Komal"];
student.reverse()
console.log("🚀 ~ student:", student)
*/

//-----------------------------------------------------------------------------------

/*
Method : join() 
Use : converts array to string
Behaviour : return a string value

let student = ["Manoj", "Shuresh", "jay", "Komal", 900];

let string1 = student.toString();
console.log("🚀 ~ string1:", string1);
let string2 = student.join();
console.log("🚀 ~ string2:", string2);

*/

//-----------------------------------------------------------------------------------

/*
Method : slice()
Use : extracts part of an array (does not change original)
Behaviour : return a sub array

let student = ["Manoj", "Shuresh", "jay", "Komal"];

let ans = student.slice(0, 2);
console.log("🚀 ~ ans:", ans);
*/

//-----------------------------------------------------------------------------------

/*
Method : splice()
Use : adds/removes elements (changes original)
Behaviour : change the existing array


let student = ["Manoj", "Shuresh", "jay", "Komal"];
console.log("🚀 ~ student:---before---->", student);

// remove
// student.splice(1, 2);

// add
// student.splice(1, 0, "Patel","Ganesh");

// update
student.splice(1, 1, "SHURESH", "TEJASH");
console.log("🚀 ~ student:---after---->", student);
*/

//-----------------------------------------------------------------------------------

/*
Method : concat()
Use : joins two or more arrays
Behaviour :  return combined array


let a1 = [1, 2, 3];
let a2 = [10, 20, 30];
let a3 = [100, 200, 300];

let concatedArray = a1.concat(a2,a3)
console.log("🚀 ~ concatedArray:", concatedArray)
*/

//-----------------------------------------------------------------------------------

/*
Method : find()  
User : returns first matching element
Behaviour :  return single element


let arr = [10, 20, 40, 60, 80, 20, 40, 80];

// arr.find((e,i)=>{})

let matchingElement = arr.find((element, index) => {
  console.log("Index : ", index, "Element :", element);
//   return element > 100
return index === 4
});
console.log("🚀 ~ matchingElement:", matchingElement)
*/

//-----------------------------------------------------------------------------------

/*
Method : findIndex()  
User : returns index of matching element
Behaviour :  return a Index of matching element

// let student = ["Manoj", "Shuresh", "jay", "Komal", "jay"];
// let matchingElementIndex = student.findIndex((element, index) => {
  //   console.log("Index : ", index, "Element :", element);
  //   return element === "jay";
  // });
  // console.log("🚀 ~ matchingElementIndex:", matchingElementIndex);
  
  
  
  
  
  // let matchIndex = studentData.indexOf('Suresh');
  // console.log("🚀 ~ matchIndex:", matchIndex)
  
  
  let matchIndex = studentData.findIndex((e, i) => {
    console.log("🚀 ~ e:", e.name);
    return e.name === "Meet";
  });
  console.log("🚀 ~ matchIndex:", matchIndex);
  
  */

//-----------------------------------------------------------------------------------

/*
Method : some()  
User : checks if any element matches
Behaviour :  return a boolean value

let arr = [{ a: 20 }, { a: 40 }, { a: 10 }, { a: 55 }, { a: 5 }];

// const available = arr.includes({ a: 20 })
const available = arr.some((e, i) => {
  console.log("🚀 ~ e:", e.a);
  return e.a === 400;
});
console.log("🚀 ~ available:", available);
*/

//-----------------------------------------------------------------------------------

/*
Method : map()  
User : transforms each element
Behaviour :  return a new array

let student = ["Manoj", "Shuresh", "jay", "Komal", "jay"];
let newArray = student.map((e) => {
  console.log("🚀 ~ e:", e);
  return e + " Patel";
});
console.log("🚀 ~ newArray:", newArray)
*/

//-----------------------------------------------------------------------------------

/*
Method : filter()  
User : filters elements based on condition
Behaviour :  return a new array
*/
let student = ["Manoj", "Shuresh", "jay", "Komal", "jay"];

let filteredData = student.filter((e)=>{
  console.log("🚀 ~ e:", e.length)
  return e.length > 4
})
console.log("🚀 ~ filteredData:", filteredData)

//-----------------------------------------------------------------------------------


/*
Method : reduce()  
User : reduces array to single value
*/

/*
=> starting index and ending index
start index => 1
end index => 10
1,10 => 1,2,3,4,5,6,7,8,9

start index => 2
end index => 10
2,10 => 2,3,4,5,6,7,8,9

=> starting index and count
start index => 1
count => 10
1,10 => 1,2,3,4,5,6,7,8,9,10


start index => 2
count => 10
2,10 => 2,3,4,5,6,7,8,9,10,11

*/
