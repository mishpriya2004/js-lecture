let arr = ["a", "b", "c", "a"];

let index = 2;

// ['a','c','a']
let filterData = arr.filter((e, i) => {
  return i !== index;
});
// console.log("🚀 ~ filterData:", filterData)

arr = filterData
console.log("🚀 ~ arr:", arr)
