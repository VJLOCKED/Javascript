<<<<<<< Updated upstream
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
    
}

console.log('gender' in student9)
console.log('age' in student9)

// To check if a property exists using hasOwnProperty

console.log("To check if a property exists: ")
let student10 = {
    name: 'Michael',
    age: 15,
    id: 1001,
    'full name': 'Michael Doe'
    
}

console.log(student10.hasOwnProperty('name'))

// Methods
//Methods inside Objects in JS. 
// Method is an Object property, which contains a function definition. 
// Therefore, Methods are used to add functionality to Objects.

console.log("Methods: ")

let student11 = {
    name: 'Michael',
    age: 15,
    id: 1001,
    'full name': 'Michael Doe',
    speak(){
        console.log("Hello, I am Vishwa")
    }
}

student11.speak()

// we can also add methods of the object outside the object 

console.log("we can also add methods of the object outside the object : ")
let student12 = {
    name: 'Michael',
    age: 15,
    id: 1001,
    'full name': 'Michael Doe'
}
student12.speak=function(){
        console.log("Hello, I am Vishwa")
}

student12.speak()

// using this keyword

console.log("using this keyword: ")
let student13 = {
    name: 'Michael',
    age: 15,
    id: 1001,
    'full name': 'Michael Doe',
    speak(){
        console.log("Hello, I am " + this.name)
    },
    speak2(){
        console.log(`I am ${this.age} years old`)
    
    },
    speak3(){
        console.log(`My full name is ${this['full name']}`)
    
    }
}
// here this refers to student13 object

student13.speak()

student13.speak2()

student13.speak3()

// removing a property of an Object
// we use 'delete' operator

console.log("removing a property of an Object: ")
let student14 = {
    name: 'Michael',
    age: 15,
    id: 1001,
    'full name': 'Michael Doe'
}

delete student14.age
console.log(student14) //age property has een deleted

// Object inside object

console.log("Object inside object: ")
let student15 = {
    name: 'Michael',
    age: 15,
    id: 1001,
    'full name': 'Michael Doe',
    address: {
        city: 'Mumbai',
        state: 'Maharashtra'
    }
}

console.log(student15.address)

console.log(student15.address.city)

// Object inside object constructor

console.log("Object inside object constructor: ")
function Student(name, email, age){
    this.name = name
    this.email = email
    this.age = age
    this.address = {
        city: 'Mumbai',
        state: 'Maharashtra'
    }
}

let student16 = new Student('Vishwa', 'vishwa@gmail.com', 13)
console.log(student16)
console.log(student16.address)


=======
let organisation= {
    name: "Coding Ninjas",
    location: "Delhi",
    established: "2016"
}
console.log(organisation);
>>>>>>> Stashed changes

