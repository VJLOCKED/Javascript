//array is an object in Javascript.

let arrayOne = [1, "one" ,true ]
<<<<<<< Updated upstream
console.log(arrayOne)
=======
arrayOne.forEach(item => {console.log(item)} )
arrayOne.map(item => {console.log(item)})
>>>>>>> Stashed changes
console.log(arrayOne.length)
console.log(arrayOne[1])
console.log()

for(i=0 ; i<arrayOne.length ; i++)
    {
        console.log(arrayOne[i])
<<<<<<< Updated upstream

    }
    console.log()

arrayOne.forEach(element => console.log(element))
console.log()

//Using array litral;

let arrayTwo = [1,2,3,4,5,6,7,8,9,10]
console.log(arrayTwo)

// Using new keyword 

    let arrayThree = new Array()
    arrayThree[0] = 1
    arrayThree[1] = 2
    arrayThree[2] = 3
console.log(arrayThree)

// Using Constructor

let studentOne = new Array("Rahul", 1, 20)

console.log(studentOne)

let arrayFour = new Array(10)

console.log(arrayFour)
arrayFour[0]=1

console.log(arrayFour)
=======
    }

//============================================================================

//// Creating array first, then providing elements to it.

const arr1 = [];
arr1[0]  = "Be";
arr1[1]  =  "a";
arr1[2]  = "Coding";
arr1[3]  = "Ninja";

// Creating array along with elements.
const arr2 = ["Be", "a", "Coding", "Ninja"];

// Logging arr1 and arrr2
console.log(arr1) ;
console.log()
arr1.map(item => {console.log(item)})
console.log()
console.log(arr2) ;

//============================================================================

// Creating instance of Array directly (using new keyword)

// Declaring the array
let student = new Array();

// Before initializing
console.log("Before initializing: ");
console.log(student);

student[0] = "Smith";  
student[1] = "John";  
student[2] = "David";

// After initializing
console.log("After initializing: ");
console.log(student);

//------------------------------------------------------------------------------

//Using an Array constructor (using new keyword)

// Creating an array of number
let numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

// Creating an array of strings
let names = new Array("Smith", 'Bob', 'David');
console.log(names);
>>>>>>> Stashed changes
