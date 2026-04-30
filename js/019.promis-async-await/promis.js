let demoPromish = new Promise((resolve, reject) => {
  // logic
  resolve("Succesfull");
  // reject("Failed");
});

demoPromish
  .then((data) => {
    console.log("🚀 ~ data:", data);
    JSON.parse("{'a':20}")
    console.log("--------then--------");
    return "test";
  })
  .then((then2Data) => {
    console.log("🚀 ~ then2Data:", then2Data);
    console.log("--------then--2--------");
  })
  .catch((failedData) => {
    console.log("🚀 ~ failedData:", failedData);
    console.log("--------catch--------");
  })
  .finally(() => {
    console.log("--------finally--------");
  });
