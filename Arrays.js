//On 10-03-2026
// Arrays in JS are mutable and can hold different types of data

let arr = [1,2,3,4,5]
console.log(arr)

console.log(arr.length) // length of the array

// Accessing elements of the array
console.log(arr[0]) // first element
console.log(arr[1]) // second element
console.log(arr[4]) // fifth element

console.log(typeof arr) // object

console.log(arr.toString()) // converts array to string
console.log(arr.join(" And ")) // joins array elements with an And 

console.log(arr.pop()) // removes last element and returns it
console.log(arr) // [1,2,3,4]

console.log(arr.push(6)) // adds 6 to the end of the array and returns new length
console.log(arr) // [1,2,3,4,6]
console.log(arr.push("Harry")) // adds "Harry" to the end of the array and returns new length
console.log(arr) // [1,2,3,4,6,"Harry"]

console.log(arr.shift()) // removes first element and returns it
console.log(arr) // [2,3,4,6,"Harry"]

console.log(arr.unshift(0)) // adds 0 to the beginning of the array and returns new length
console.log(arr) // [0,2,3,4,6,"Harry"]
console.log(delete arr[4]) // deletes fifth element but does not return it

let a = [1,2,3,4,5]
let b = [6,7,8,9,10]
let c = [11,12,13,14,15]

let d = a.concat(b,c) // concatenates arrays a, b and c and returns new array
console.log(d) // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

console.log(d.slice(2,5)) // returns a new array from index 2 to 4 (5 is not included)
console.log(d.slice(2)) // returns a new array from index 2 to the end of the array
console.log(d.splice(2,3)) // removes 3 elements from index 2 and returns them
console.log(d) // [1,2,6,7,8,9,10,11,12,13,14,15]

console.log(d.reverse()) // reverses the array and returns it
console.log(d) // [15,14,13,12,11,10,9,8,7,6,2,1]

console.log(d.sort()) // sorts the array and returns it
console.log(d) // [1,10,11,12,13,14,15,2,6,7,8,9] (sorts as strings)

// concept of loops in arrays

let array = [1,22,12,43,10,5,9]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);

}

array.forEach((value,index,array) => {
    console.log(value,index,array);
})
object = {
    name:"musa",
    age:19,
    usn:"1BM24CS171"
}

for (const key in object) {
    if (!Object.hasOwn(object, key)) continue;
    
    const element = object[key];
    console.log(key,element);
    
    
}

for (const key in array) {
    if (!Object.hasOwn(array, key)) continue;
    
    const element = array[key];
    console.log(key,element);
    
}


// functionality of map
// for example i have an array of numbers and i want to create a new array with the square of those numbers

let numbers = [1,2,3,4,5]
let newNumbers=[];
for (const key in numbers) {
    if (!Object.hasOwn(numbers, key)) continue;
    
    const element = numbers[key];
    newNumbers.push(element * element);
}
console.log(newNumbers);
// instead of doing this we can use map function which is more efficient and cleaner
let newNumbers2 = numbers.map((value)=>{
    return value * value;
})
console.log(newNumbers2);

// filter function is used to filter out the elements of an array based on a condition
// for example i want to filter out the even numbers from the array

const evenNumbers(){
    if(value % 2 === 0){
        return true;
    }
    return false;

}
let evenNumbersArray = numbers.filter(evenNumbers);
console.log(evenNumbersArray);

// reduce function is used to reduce the array to a single value based on a condition
// for example i want to find the sum of all the numbers in the array

const sumOfNumbers = numbers.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue;
},0) // 0 is the initial value of the accumulator
console.log(sumOfNumbers);

array.from("musa") // creates an array from a string
console.log(Array.from("musa")) // ['m','u','s','a']