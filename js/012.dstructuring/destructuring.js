let obj = {
  a: 200,
  b: 300,
  c: 500,
  d: 500,
  f: 500,
};

let { b, a, ...c } = obj;

// let a = obj.a;
// let b = obj.b;
// let c = obj.c;
// console.log("----->",obj.a)

// console.log("----a,b,c---->", a, b, c);

let arr = [111, 222, 333, 444];

let [x, y, ...z] = arr;

// let x = arr[0];
// let y = arr[1];
// let z = arr[2];
// console.log("----x,y,z---->", x, y, z);

function getUserAPI() {
  return {
    name: "Urvish",
    city: "Surat",
    DOY: 2000,
  };
}

// let data = getUserAPI()
// console.log("🚀 ~ data:", data.name)
// console.log("🚀 ~ data:", data.city)

// let msg = `My name is ${data.name}, My city is ${data.city}`;
// console.log("🚀 ~ msg:", msg);

let { name, city } = getUserAPI();

let msg = `My name is ${name}, My city is ${city}`;
console.log("🚀 ~ msg:", msg);
