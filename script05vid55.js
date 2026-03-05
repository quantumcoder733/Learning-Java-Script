// learning about variables in java 
// using var and let and typeof(to know the data type)

let a = 10;
let b = 20;
{
    let a = 100;
    let b = 200;
    console.log(a)
    console.log(b)
}
console.log(a)
console.log(b)
//output 
//100
// 200
// 10
// 20

var a1 = 10;
var b1 = 20;
{
    var a1 = 100;
    var b1 = 200;
    console.log(a)
    console.log(b)
}
console.log(a)
console.log(b)
// output
// 10
// 20
// 10
// 20

console.log(typeof(a))

//now we learn about data types in js

q = "musa";
w = 22;
e = 3.555;
t = undefined;
y =  null;
r = true;
u = 122222222;

console.log(q,w,e,r,t,y,u);
console.log(typeof q,typeof w,typeof e,typeof r,typeof t,typeof y,typeof u);


//now learning about objects
const o = {
    name:"musa",
    age:19,
    "job status":true
}
console.log(o);

o.salary = null;
console.log(o);

o.salary = 12000;
console.log(o);