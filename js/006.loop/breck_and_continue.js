/*
for (let i = 0; i < 10; i++) {
  console.log("-----i---->", i);
  if (i === 5) {
    break;
  }
}
*/

for (let i = 0; i < 5; i++) {
  console.log("-----i--before-->", i);
  if (i === 3) {
    continue;
  }
  console.log("-----i--after-->", i);
}
