let student = ["Suresh", "Tej", "Manoj", "Roshan", "Ranjeet"];

/*
Task : 

find the students name which has more then 5 charactor
ans = ["Suresh", "Roshan", "Ranjeet"]

*/

function findStudentsWithMoreThen5Charactor(array) {
  let filteredData = array.filter((e) => {
    // console.log("🚀 ~ e:", e.length > 5);
    return e.length > 5;
  });
  return filteredData;
}

const ans = findStudentsWithMoreThen5Charactor(student);
// console.log("🚀 ~ ans:", ans)
const ans2 = findStudentsWithMoreThen5Charactor([
  "tegdhjsg",
  "gsfjh",
  "asf",
  "wde",
  "asfsa",
]);
// console.log("🚀 ~ ans2:", ans2)

/*
Task : 

find the total charactor in the array
let student = ["Suresh", "Tej", "Manoj"];
ans : 14

*/

function calculateTotalCharactorInArray(array) {
  let total = 0;
  array.map((e) => {
    total = total + e.length;
  });
  return total;
}
const ch1 = calculateTotalCharactorInArray(student);
console.log("🚀 ~ ch1:", ch1);
const ch2 = calculateTotalCharactorInArray(["test","te"]);
console.log("🚀 ~ ch2:", ch2)
