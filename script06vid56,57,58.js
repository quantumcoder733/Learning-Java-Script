console.log("Running on terminal")


// now in this video i have learnt all the basic 
// ->arithmatic operations (+,-,*,/,**,%)
// ->logical operations    (&&,||,!)
// ->assignment operators  (=,x+=y,x-=y,*=,/=,**=)
// ->comparators           (==,!=,===,!==,>=,<=,>,<)
// ->if else statements all known 

// video 57
// next video is all about loops
// for loop 
// for in loop
// for of loop
// while loop
// do while loop
// 
// for looop is same as normal
// do while and while also same as normal 


//video 58 
// in this video i learnt about functions

//Function defination
function display(name,age,usn){
    console.log("User name is "+name)
    console.log("User age is "+age)
    console.log("User usn is "+usn)

}

// function call
display("musa",19,"1BM24CS171")
display("shahid",14,"1BM24CS111")

function sum(a,b,c=3/*this is temporory assignment */){
    return a+b+c
}

result1 = sum(2,5) //10
result2 = sum(2,5,4)  //11

console.log(result1)
console.log(result2)

// if u dont pass any argument like 
// a=10 b=nothing then answer will be NaN which means not a number

// arrow function is used in recursion mostly
const func1 =(x)=>{
    console.log("This is an arrow function ",x)
}
func1(34)
func1(355)
func1(766)