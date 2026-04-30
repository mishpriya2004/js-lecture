function cb(x) {
  console.log("-----call back function------>",x);
}

function main(cb) {
  let x = 70
  cb(x);
}

main(cb);

// main((x)=> {
//   console.log("-----call back function------>",x);
// });

let arr = [10, 20, 30];


function cb2(e,i) {
  
}
arr.map(cb2)
