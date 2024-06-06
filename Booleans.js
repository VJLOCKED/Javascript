// Booleans from comparison operators

console.log(101 > 100); // this is true
console.log(101 < 100); // flase
console.log(10 >= 10); //true
console.log(20 <= 10); // false

// Comparing two values with an equality operator will return a Boolean value
// (STrict Equality) === check whether the two values are same datatype and same valuw. BOTH it will check.

var skyColor = "blue";
var carColor = "blue";
var hairColor = "black";

console.log(skyColor === carColor); // this is true
console.log(skyColor === hairColor); // this is false
console.log(skyColor !== hairColor); // this is true cuz same type but values are different

// == check whether the two values have same value or not , it doens't check datatype . Its less strict.

var ageOfBill = 10;
var ageOfSally = "10";

console.log(ageOfBill == ageOfSally); // this is true
console.log(ageOfBill != ageOfSally);// this is 

// Truthy or Falsy 
// Every single value in JavaScript is considered either truthy or falsy. Truthy values result in the value true when coerced into a Boolean value. Falsy values result in the value false.

console.log(Boolean(100)); // will be true 

//All of the following values are falsy : 
// false
// null
// undefined
// 0
// -0
// NaN
// An empty string ('')