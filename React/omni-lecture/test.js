let obj = { a: 29, b: 30 };
console.log("🚀 ~ obj:", obj);
// obj.a = 40
obj = { a: 40, ...obj }; // { a:40, a:29, b:30 } => {a:29, b:30} 
obj = { ...obj, a: 40 }; // { a:29, b:30, a:40 } => {a:40, b:30} 
console.log("🚀 ~ obj:", obj);
