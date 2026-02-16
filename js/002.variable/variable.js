// var, let , const

// keyword name = value

/*
redeclier = create 2 variable with same name
reassign = we can change the value
intial value required = intial value compulsory

*/

//===================================== var ========================================

/*
redeclier : yes
reassign : yes
intial value required : no
*/

// ---------- redeclier --------------
var a = 100;
var a;

// ---------- reassign --------------
var a2 = 100;
console.log("------a2--before---->", a2);

a2 = 200;
console.log("------a2--after---->", a2);

// ---------- intial value required --------------

var a3;
console.log("------a3------>", a3);




//===================================== let ========================================

/*
redeclier : no
reassign : yes
intial value required : no
*/

// ---------- redeclier --------------
// let b
// let b // gives error

// ---------- reassign --------------
let b2 = 100;
console.log("------b2---before--->", b2);
b2 = 300;
console.log("------b2---after--->", b2);


// ---------- intial value required --------------

let b3;

console.log("------b3------>", b3);


//===================================== const ========================================

/*
redeclier : no
reassign : no
intial value required : yes
*/

// ---------- redeclier --------------

// const c = 90
// const c =90// gives error

// ---------- reassign --------------

// const c2 = 90
// c2 = 100

// ---------- intial value required --------------


// const c3 