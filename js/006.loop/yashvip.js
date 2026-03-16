// task-1

// let str = "How are you ?"
// let ch = "w"
// let count = 0;

// for (let i = 0; i < str.length; i++) {

//     console.log("",str[i]);

//     if(str[i]===ch){
//         count++;
//     } 
// }
// if(count > 0){
//     console.log("count",count);
// }else{
//     console.log("charactor not available");
// }
   
  

// task-2

// let str="Hello Yashvi";

// for(let i =0; i < str.length; i++){
//     let ch = str[i];

//     if(ch >= 'A' && ch<= 'Z'){
//         console.log(ch + "charactor is uppercase");
//     }
//     else if(ch >= 'a' && ch<= 'z'){
//         console.log(ch + "charactor is lowercase");
//     }
// }


// task-3

// let str = "Yashvi Patel ";

// for (let i = 0; i < str.length; i++) {
//     console.log("-----as--->",str.charCodeAt(i))
// }


// task-4 -> 0,1,1,2,3,5,8,13... => 15

//  let a = 0;
//  let b = 1;

// console.log(a);
// console.log(b);
// for(let i =1; i<=13; i++){
//     let next = a+b;
//         console.log(next);
//     a = b;
//     b = next;
// }

// task-5 

let str = '  yashvi patel     '
let start = 0
let end = str.length -1;

for(i = 0; i<str.length; i++){
    if(str == " "){
        start = i;
        break;
    }
}








