/*

let arr = [{ a: 20 }, { a: 40 }, { a: 10 }, { a: 55 }, { a: 5 }];
ans =  [{ a: 5 }, { a: 10 }, { a: 20 }, { a: 40 }, { a: 55 }];

*/
let arr = [{ a: 20 }, { a: 40 }, { a: 10 }, { a: 55 }, { a: 5 }];

arr.sort((ele1, ele2) => ele1.a - ele2.a);


/*

after all even element add Patel
after all odd element add Rathod

input -> ["Manoj", "Shuresh", "jay", "Komal", "jay"];
output -> ["Manoj Patel", "Shuresh Rathod", "jay Patel", "Komal Rathod", "jay Patel"];

*/