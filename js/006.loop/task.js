// let str = "Hello Urvish, How are you ?";
let str = "Hello Urvish ";
console.log("-----as--->",str.charCodeAt(1))
// let x = "qwe ";
// console.log("🚀 ~ x:", x.length);

// console.log("🚀 ~ x[0]:", x[2]);
let totalSpace = 0;
for (let i = 0; i < str.length; i++) {
  console.log("----ch---->", str[i]);                                        
  //   totalSpace = totalSpace + 1;
  if (str[i] === "U") {
    totalSpace += 1;
  }
}
console.log("🚀 ~ totalSpace:", totalSpace);


/*
Task :
string : "How are you ?"
charactor to count : "U"

if charactor not available -> charactor not available 

Task :

Charactor is uppercase
Charactor is lowercase

*/

// task -> 0,1,1,2,3,5,8,13... => 15
// task -> '  urvish patel     '

