const prompt = require('prompt-sync')(); 

const a = Number(prompt("Enter the first number: "));
const b = Number(prompt("Enter the second number: "));
const o = prompt("Enter the operator (+, -, *, /): ");

let result;
let isFaulty = Math.random() < 0.1; 

if (isFaulty) {
    console.log("--- Faulty Mode Activated ---");
    if (o == "+") result = a - b;
    else if (o == "-") result = a / b;
    else if (o == "*") result = a + b;
    else if (o == "/") result = a ** b;
    else {
        console.log("Invalid operator");
        process.exit(1);
    }
} else {
    console.log("--- Normal Mode ---");
    if (o == "+") result = a + b;
    else if (o == "-") result = a - b;
    else if (o == "*") result = a * b;
    else if (o == "/") result = a / b;
    else {
        console.log("Invalid operator");
        process.exit(1);
    }
}

console.log(`The result is: ${result}`);