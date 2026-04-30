function getUserData(params) {
  return new Promise((resolve, reject) => {
    // logic
    // setTimeout(() => {
    //   resolve("Succesfull");
    // }, 1000);
    reject("Failed");
  });
}

// getUserData()
//   .then((data) => {
//     console.log("--------then--------");
//     return "test";
//   })
//   .catch((failedData) => {
//     console.log("--------catch--------");
//   })
// .finally(() => {
//   console.log("--------finally--------");
// });

async function main(params) {
  try {
    let data = await getUserData();
    console.log("🚀 ~ data:", data);
  } catch (error) {
    console.log("------>", error);
  } finally {
    console.log("---finally--->");
  }
}

main();

// try{
//   JSON.parse("{'a':30}")
// }catch(err){
//   console.log("------>")

// }

/*
Promise.all(iterable): Fulfills when all promises in the array fulfill. It rejects immediately if any single promise fails (fail-fast behavior).

Promise.allSettled(iterable): Fulfills only after all promises have settled, regardless of success or failure. It returns an array of objects describing the outcome of each.

Promise.any(iterable): Fulfills as soon as the first promise in the array fulfills. It only rejects (with an AggregateError) if all promises are rejected.

*/
