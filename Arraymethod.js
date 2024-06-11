// of() method
// Used to create an array


let str = Array.of("My", "name", "is", "Vishwa");
console.log(str);

// ----------------------------------------------------------------

// indexOf() method 
// Used to get position of certain elements in the array

let arr = Array.of("My", "name", "is", "Vishwa");
console.log("index of element Vishwa is: ", arr.indexOf("Vishwa")) 

// ----------------------------------------------------------------

//lastIndexOf() method
// Searching from a specified position

arr = Array.of("My","Vishwa" , "name", "is", "Vishwa", "J");
console.log("last index of element Vishwa is: " ,arr.lastIndexOf("Vishwa", 5))

// ----------------------------------------------------------------

//firstIndexOf() method

arr = Array.of("My","Vishwa" , "name", "is", "Vishwa", "J");
console.log("first index of element Vishwa is: ", arr.indexOf("Vishwa"))

// ----------------------------------------------------------------

//length() method
//length or the number of elements in the array

arr = Array.of("My","Vishwa" , "name", "is", "Vishwa", "J");
console.log("length of array is: ", arr.length)

// ----------------------------------------------------------------

//find() method
//returns the first found element in the array
//If anyone of the element satisfies the conditions, we get it as an answer, 
//or else we get undefined as the answer.

arr = Array.of("My","Vishwa" , "name", "is", "Vishwa", "J");
console.log(arr.find(element => element == "Vishwa"))

//OR
 
arr = Array.of("My","Vishwa" , "name", "is", "Vishwa", "J");
if(arr.find(element => element == "Vishwa")){
console.log("element found! ")
}
else{
    console.log("element not found! ")
}

// ----------------------------------------------------------------

//findIndex() method

arr = Array.of("My","Vishwa" , "name", "is", "Vishwa", "J");

console.log("Index of found element is: " , arr.findIndex(element => element == "Vishwa"))

// ----------------------------------------------------------------

//reverse() method
// invert the order of the elements in the array

arr = Array.of("My","Vishwa" , "name", "is", "Vishwa", "J");
console.log(arr.reverse())

//----------------------------------------------------------------

// forEach() method
//to perform a function once on every element of the array

arr = Array.of("My","Vishwa" , "name", "is", "Vishwa", "J");
arr.forEach(element => console.log(element))

//another example

let arr1 = [1,2,3,4,5]
let sum=0
arr1.forEach(
    function sumOfEachNumbers(element){
        sum=sum + element
        console.log(sum)
    }
)
// ----------------------------------------------------------------

// concat() method
// combine two or more arrays into one single array
// It does not change the original arrays and rather returns a new array.

arr = Array.of("My","Vishwa" , "name", "is", "Vishwa", "J");
arr1 = [1,2,3,4,5]
console.log(arr.concat(arr1))

// ----------------------------------------------------------------

// join() method
// to concatenate all the elements of a single array

arr = Array.of("My", "name", "is", "Vishwa", "J");

console.log(arr.join(" ")) //o/p = My name is Vishwa J

// join with comma

arr = Array.of("My", "name", "is", "Vishwa", "J");

console.log(arr.join()) //o/p = My,name,is,Vishwa, J

// join with charactor:

arr = Array.of("My", "name", "is", "Vishwa", "J")

console.log(arr.join('1')) //o/p = My,name,is,Vishwa,J

// join without charactor or comma:

arr = Array.of("My", "name", "is", "Vishwa", "J");

console.log(arr.join('')) //o/p = My,name,is,Vishwa,J

// ----------------------------------------------------------------

//map() method

arr = Array.of("My", "name", "is", "Vishwa", "J");

console.log(arr.map(element => element)) //o/p = [ 'MY', 'NAME', 'IS', 'VISHWA', 'J' ]

//OR

arr.map(item =>console.log(item))

// ----------------------------------------------------------------

// pop() method
//remove the last element of the array. This method returns the last element too.

arr = Array.of("My", "name", "is", "Vishwa", "J");

console.log("pops last element of array : ", arr.pop()) //o/p = J

console.log("updated array: ", arr) // last element removed

// ----------------------------------------------------------------

// push() method
// add an element at the end of the array

arr = Array.of("My", "name", "is", "Vishwa");

arr.push("J") 
console.log("push updated array: ", arr) // last element added

// ----------------------------------------------------------------
//Left out = flat, filter ,
// ----------------------------------------------------------------

//sort() method
//arrange the elements of an array in ascending (default) order

arr = Array.of(5,3,4,2,1);

console.log(arr.sort())

// ----------------------------------------------------------------

//shift() method
//removes the first element of the array

arr = Array.of("My", "name", "is", "Vishwa");
arr.shift();
console.log("shift updated array: ", arr) // first element removed

// ----------------------------------------------------------------

//unshift() method
// The unshift method returns the size(length) of the updated array.

arr = Array.of("name", "is", "Vishwa");
arr.unshift("My");

console.log("unshift updated array: ", arr) // first element added
console.log(arr.unshift()) 

// ----------------------------------------------------------------

//slice() method
//creates a new subarray from the array
//We give the starting and ending positions from where we want to slice.
//The starting position is included, and the ending position is excluded.
//This method does not change the original array in any way.

arr = Array.of("My", "name", "is", "Vishwa", "J");

console.log(arr.slice(1,4)) //o/p = [ 'name', 'is', 'Vishwa' ]

// ----------------------------------------------------------------

//toString() method
//converts the array into a string.

arr = Array.of("My", "name", "is", "Vishwa", "J");

console.log(arr.toString) //o/p = My,name,is,Vishwa,J

// ----------------------------------------------------------------

//size() method

arr = Array.of("My", "name", "is", "Vishwa", "J");

console.log(arr.size(arr)) //o/p = 5

// ----------------------------------------------------------------