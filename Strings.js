console.log("This is String in JS")
let s = "Musa"
console.log(s)
console.log(s[0])
console.log(s[1])
console.log(s[2])
console.log(s[3])
console.log(s[4])  //undefined
console.log(s.length) //length of string
console.log(s.toUpperCase()) //MUSA
console.log(s.toLowerCase()) //musa
console.log(s.indexOf("s")) //2
console.log(s.indexOf("a")) //3
console.log(s.indexOf("z")) //-1 means not found
my_name= "musa"
freind = "Absaaar"

console.log("My name is "+my_name+" And my fends name is "+freind)
console.log(`My name is ${my_name} And my frnds name is ${freind}`)

console.log(my_name.slice(1,3)) //us
console.log(my_name.slice(0,4)) //musa
console.log(my_name.slice(2)) //sa
console.log(my_name.slice(-3)) //usa
console.log(my_name.slice(-4,-1)) //mus
console.log(my_name.replace("musa","shahid")) //shahid
console.log(my_name.concat(" ","khan")) //musa khan
console.log(my_name.trim()) //musa
console.log(my_name.split("")) //['m','u','s','a']
console.log(my_name.split("a")) //['mus','']

//Strings are immutable (cannot be changed ) in js