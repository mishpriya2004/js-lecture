/*

switch(value){

Case value :
code...
breck;

Case value :
code...
breck;

Case value : 
code...
breck;

default :
breck;

}

*/

let x = "greenn";

switch (x) {
  case "red":
    console.log("Color is red");
    break;
  case "yellow":
    console.log("Color is Yellow");
    break;
  case "green":
    console.log("Color is green");
    break;
  default:
    console.log("Color is out of range");
}

let no = 50;

switch (true) {
  case no < 30: // t/f
    console.log("Color is red");
    break;
  case no < 60: // t/f
    console.log("Color is Yellow");
    break;
  case no < 100: // t/f
    console.log("Color is green");
    break;
  case no < 0: // t/f
    console.log("Color is green");
    break;
  default:
    console.log("Color is out of range");
}
