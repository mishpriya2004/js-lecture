let age = 19;

/*

if(condition){
code...
}


if(condition){
    code...
}else{
    code...
}



if(condition){
    code...
}else if(condition){
    code...
}else if(condition){
    code...
}else{
    code...
}
 */

// if (age > 18) {
//   console.log("You are allow to vote");
// }

// if (18 < age) {
//   console.log("You are allow to vote");
// } else {
//   console.log("Sorry you are minor you can't allow to vote");
// }

const number = -45;
if (number < 33) {
  console.log("-----RED----->");
} else if (number > 33 && number < 66) {
  console.log("-----YELLOW----->");
} else if (number > 66 && number < 100) {
  console.log("-----GREEN----->");
} else {
  console.log("Please enter valid number.");
}


/*
TASK - 1
- Pass and fail condition

TASK - 2
- if user enter value 33 and below 33 => RED
- if user enter value 66 and below 66 but above 33 => YELLOW
- if user enter value 100 and below 100 but above 66 => GREEN
- if user enter nagative value => show error "Please enter positive value"
- if user enter value above 101 => show error "please enter valid value"

TASK - 3
switch case task
*/