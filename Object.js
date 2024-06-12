// Using object literal

let student = {name: 'Vishwa', email: 'vishwa@gmail.com', age: 13}
console.log(student)

// Using new keyword

console.log("Using new keyword : ")
let student1 = new Object()
student1.name = 'Vishwa'
student1.email = 'vishwa@gmail.com'
student1.age = 13
console.log(student1)

// Using constructor function

console.log("Using constructor function : ")
function Student(name, email, age){
    this.name = name
    this.email = email
    this.age = age
}

let student2 = new Student('Vishwa', 'vishwa@gmail.com', 13)
let student3 = new Student('Vinod', 'vinod@gmail.com', 14)
console.log(student2)
console.log(student3)

// adding properties outide curly bracket

let student4 ={ name: 'Vishwa' , age: 24 , email: 'vishwa@gmail.com' }
student4.id =1023

console.log(student4)

//if we want to see only the name of the student and not the other details
//To access  a specific property of an object, we can use,
// 1) dot(.) operator
// 2) square([ ]) brackets

// Accessing through Dot Operator
// consider prev example student4 

console.log("Using dot operator")
console.log(student4.name)
console.log(student4.email)
console.log(student4.age)
console.log(student4.id)

// Accessing through square brackets

console.log("Using square brackets: ")
console.log(student4['name'])
console.log(student4['email'])
console.log(student4['age'])
console.log(student4['id'])


// In these particular cases, using the dot operator will cause your code to throw an error.
// If the name of the key is a number and not a string:

console.log("If the name of the key is a number and not a string: ")
let student5 = {
    1: 'Vishwa',
    2: 'Vinod'
}

console.log(student5['1'])
// console.log(student5.1) //throws error 

//If the name of the key has space-separated strings:

console.log("If the name of the key has space-separated strings: ")
let student6 = {
    'first name': 'Vishwa',
    'last name': 'J',
    'age': 24
}
console.log(student6['first name'])
// console.log(student6.first name) // throws error

// When the key name comes from a variable:

console.log("When the key name comes from a variable: ")

let student7 = {
    name: 'Michael',
    age: 15,
    id: 1001,
    20: 'twenty',
    'full name': 'Michael Doe'
}
var x = 'name';
console.log(student7[x]);
console.log(student7.x) //gies undefined as output as

//If you try to access a property which is not defined inside the object, the output shows ‘undefined’.

console.log("If you try to access a property which is not defined inside the object, the output shows ‘undefined’: ")
let student8 = {
    name: 'Michael',
    age: 15,
    id: 1001,
    'full name': 'Michael Doe'
}

console.log(student8.address) //gives undefined as output

//Existence of a property
//To check if a property exists inside an object or not, in operator is used.

console.log("To check if a property exists inside an object or not, in operator is used: ")
let student9 = {
    name: 'Michael',
    age: 15,
    id: 1001,
    'full name': 'Michael Doe'
    console.log(this.name)
}

console.log('gender' in student9)
console.log('age' in student9)