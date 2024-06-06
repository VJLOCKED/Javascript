// Incrementing/Decrementing Number Values
// Using +=, -=, *=, and /= 
// in the case of +=, the value is being incremented by a constant value
// in the case of -=, the value is being decremented by a constant value
// in the case of *=, the value is being incremented by a multiple
// in the case of /=, the value is being decremented by a multiple

var num = 10;

// add 10 to the number
num += 10;
console.log("Add 10:", num);

// subtract 5 from the number
num -= 5;
console.log("Subtract 5:", num);

// multiply the number by 7
num *= 7;
console.log("Multiply by 7:", num);

// divide the number by 5
num /= 5;
console.log("Divide by 5:", num);

// ++ and -- Operators : when we want to increment or decrement a value by one.

let num1 = 10;

num++;
console.log(num1);

num--;
console.log(num1);

// Using if else condition

let noOfQuantity = 0
let operation = "increment"
if (operation === "increment") {
    noOfQuantity++
}else {
    noOfQuantity--
}

console.log("noOfQuantity======> " + noOfQuantity)

// Example for increment

let num2= 10;
num++;
console.log(num2)

// If condition example 

let isSubscribed=1;
if(isSubscribed)
    { console.log("no condition======>")}

if(1 == '1')
    { console.log("hii") }