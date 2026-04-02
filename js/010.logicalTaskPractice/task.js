let student = ["Suresh", "Tej", "Manoj", "Roshan", "Ranjeet"];

/*
Task : 

fi
nd the students name which has more then 5 charactor
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
// console.log("🚀 ~ ch1:", ch1);
const ch2 = calculateTotalCharactorInArray(["test", "te"]);
// console.log("🚀 ~ ch2:", ch2)

/*
Task 
let names = ["Suresh", "Tej", "Manoj", "Roshan", "Ranjeet"]

cobine names which length is even

Suresh + Roshan => SureshRoshan

ans = SureshRoshan


*/

const students = [

  {
    id: 1,
    name: "Aarav Patel",
    age: 20,
    grade: "A",
    marks: 85,
    subjects: ["Math", "Science", "English"],
    city: "Ahmedabad",
    isPassed: true,
  },
  {
    id: 2,
    name: "Riya Sharma",
    age: 19,
    grade: "B",
    marks: 72,
    subjects: ["Math", "History", "English"],
    city: "Delhi",
    isPassed: true,
  },
  {
    id: 3,
    name: "Karan Mehta",
    age: 21,
    grade: "C",
    marks: 58,
    subjects: ["Science", "Math"],
    city: "Mumbai",
    isPassed: true,
  },
  {
    id: 4,
    name: "Sneha Joshi",
    age: 20,
    grade: "F",
    marks: 33,
    subjects: ["English", "History"],
    city: "Pune",
    isPassed: false,
  },
  {
    id: 5,
    name: "Rahul Verma",
    age: 22,
    grade: "A",
    marks: 91,
    subjects: ["Math", "Science", "Computer"],
    city: "Bangalore",
    isPassed: true,
  },
  {
    id: 6,
    name: "Priya Singh",
    age: 18,
    grade: "B",
    marks: 76,
    subjects: ["English", "Computer"],
    city: "Jaipur",
    isPassed: true,
  },
  {
    id: 7,
    name: "Arjun Kumar",
    age: 23,
    grade: "D",
    marks: 45,
    subjects: ["Math", "Science"],
    city: "Chennai",
    isPassed: false,
  },
  {
    id: 8,
    name: "Neha Gupta",
    age: 20,
    grade: "A",
    marks: 88,
    subjects: ["Science", "English"],
    city: "Kolkata",
    isPassed: true,
  },
  {
    id: 9,
    name: "Vikram Desai",
    age: 21,
    grade: "C",
    marks: 60,
    subjects: ["Math", "Computer"],
    city: "Surat",
    isPassed: true,
  },
  {
    id: 10,
    name: "Anjali Nair",
    age: 19,
    grade: "B",
    marks: 74,
    subjects: ["History", "English"],
    city: "Kochi",
    isPassed: true,
  },
];

students.map((e) => {
  // console.log("----e---->",e)
console.log(`my name is ${e.name}`)

});


/*
print any 4 details
print length of city
if isPassed true => `<name> is passed`     false => `<name> is faild` 


*/