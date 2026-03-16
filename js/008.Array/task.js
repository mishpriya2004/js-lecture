/*
let string = "hello world"

let subString = "    wo   "

*/
let string = "    hello world   ";
let ans = "";
let isAdd = false;
for (let i = 0; i < string.length; i++) {
  if (string[i] !== " " || isAdd) {
    ans += string[i];
    isAdd = true;
  }
}
console.log("🚀 ~ ans:", ans);

// ans +=string[0] => not works
// ans +=string[1] => not works
// ans +=string[2] => not works
// ans +=string[3] => '' + 'h' => 'h'
// isCheck=true
// ans +=string[4] => 'h' + 'e' => 'he'
// ans +=string[5] => 'he' + 'l' => 'hel'
// ans +=string[5] => 'he' + 'l' => 'hell'
// ans +=string[5] => 'he' + 'l' => 'hello'
// ans +=string[5] => 'he' + 'l' => 'hellow'

let email1 = "urvish@gmail.com";
let email2 = "Urvish@gmail.com";

if (email1 === email2) {
  console.log("email are same");
} else {
  console.log("email are different");
}
