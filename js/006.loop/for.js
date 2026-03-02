for (let i = 0; i < 5; i++) {
  //   console.log("----no---->", i);
}
// 0 -> 2 -> 4 -> 6
// 3 -> 5 -> 7 -> 9

/*
1st time 
i = 0 
0 < 5 => true
execute
0++ => 1


2nd time
i = 1
1 < 5 => true
execute
1++ => 2

3rd time
i = 2 
2 < 5 => true
execute
2++ => 3

4th time
i = 3
3 < 5 => true
execute 
3++ => 4


5th time
i = 4
4 < 5 => true
execute 
4++ => 5

6th time
i = 5
5 < 5 => false 
loop close

*/

let no = [100, 200, 300, 400, 500, 600, 700, 800];
console.log("---->", no.length);
// no[0] => 100
// no[1] => 200
// no[2] => 300
// no[3] => 400
// no[4] => 500

// console.log("----no----->", no[0]);
// console.log("----no----->", no[1]);
// console.log("----no----->", no[2]);
// console.log("----no----->", no[3]);
// console.log("----no----->", no[4]);

for (let i = 0; i < no.length; i++) {
  console.log("----no----->", no[i]);
}
