function otpGenerator() {
  let randomNo = Math.random();
  console.log("----step-1---> randomNo:", randomNo);
  let stringNo = randomNo.toString();
  console.log("----step-2---> stringNo:", stringNo);
  let splitArr = stringNo.split(".");
  console.log("----step-3---> splitArr:", splitArr);
  let otp = splitArr[1].slice(0, 6);
  console.log("----step-4---> otp:", otp);
//   let OTP = Math.random().toString().split(".")[1].slice(0,6)
//   console.log("🚀 ~ otpGenerator ~ OTP:", OTP)
}


otpGenerator()
// 0.00423423423  * 1000000 => 4234.23423 => trunc => 4234

"0.12423423423"[
  // split with "."
  ("0", "12423423423")
];

// [1]
("12423423423");

// slice
// 0,6
("124234");
