let randomNumber = Math.random() * 10;
let integerValue = Math.trunc(randomNumber);

for (let i = 1; i > 0; i++) {
  if (integerValue >= 1 && integerValue <= 6) {
    console.log("🚀 ~ integerValue:", integerValue);
    break;
  } else {
       if(integerValue === 9){
        console.log(integerValue - 3)
       }                             // 7 , 8, 9
    
  }
}
