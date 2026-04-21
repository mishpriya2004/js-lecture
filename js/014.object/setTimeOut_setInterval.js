// setTimeout(() => {
//   console.log("----hello----->");
// }, 5000);

let id = setInterval(() => {
  console.log("----setInterval----");
}, 2000);
console.log("🚀 ~ id:", id)



setTimeout(() => {
 clearInterval(id)
}, 5000);

