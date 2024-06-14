// to return unqiue values 

// let arr = [-1,-1,2,4,4,10,23,10,2,1]

// arr.sort((a, b) => a - b)

// for(let i=0; i<arr.length; i++){
//     if(i == 0){
//         console.log(arr[i])
// }else if(arr[i] !== arr[i-1]){
//     console.log(arr[i])
// }
// // } 

// // // using ...new Set

// // arr = [-1,-1,2,4,4,10,23,10,2,1]
// // arr.sort((a, b) => a - b)
// // console.log(...new Set(arr)) // O/P : -1 1 2 4 10 23
// // console.log([...new Set(arr)]) // O/P : [ -1, 1, 2, 4, 10, 23 ] 

// // Using Function with arg and no return value

// let value = [-1,-1,2,4,4,10,23,10,2,1]

// value.sort((a, b) => a - b)
// function returnUniqueValues(arr){
//     for(let i=0; i<arr.length; i++){
//         if(i == 0){
//             console.log(arr[i])
//     }else if(arr[i] !== arr[i-1]){
//         console.log(arr[i])
//     }
//     } 
// }

// returnUniqueValues(value)

// Using Function with arg and return value

// let values1= [-1,-1,2,4,4,10,23,10,2,1]
// function returnUniqueValues(arr){
//     arr.sort((a, b) => a - b)
//     uniqueArr=[]
//     for(let i=0; i<arr.length; i++){
//         if(i == 0){
//             uniqueArr.push(arr[i])
//     }else if(arr[i] !== arr[i-1]){
//         uniqueArr.push(arr[i])
//     }
//     } 
//     return uniqueArr
// }

// console.log(returnUniqueValues(values1))

// ASCII values
// print small letters 

// for(let i=97; i<=122; i++){
//     console.log(String.fromCharCode(i))
// }

// print capital letters

// for(let i=65; i<=90; i++){
//     console.log(String.fromCharCode(i))
// }

// find ASCII value of BAD


// let str = "BAD"
// for(let i=0; i< str.length; i++){

//     console.log(str.charCodeAt(i))
// }


//task play with string 
//string slice 
//4 types of functions

// let a
// let b=20
// console.log(a+b)

//  let values1= [-1,-1,2,4,4,10,23,10,2,1]
// function returnUniqueValues(arr){
//     arr.sort((a, b) => a - b)
//     uniqueArr=[]
//     for(let i=0; i<arr.length; i++){
//         if(i == 0){
//             uniqueArr.unshift(arr[i])
//     }else if(arr[i] !== arr[i-1]){
//         uniqueArr.unshift(arr[i])
//     }
//     uniqueArr.reverse(arr[i])
//     } 
//     return uniqueArr
// }
// console.log(returnUniqueValues(values1))

// var sorting = function(arr){
//     arr.sort((a, b) => a - b)
//     return arr
// }

// console.log(sorting(values1))

// values1= [-1,-1,2,4,4,10,23,10,2,1]
// function sorting(arr){
//     arr.sort((a, b) => a - b)
//     return arr
// }

// console.log(sorting(values1))

// let values1 = [-1, -10,1, 2 , 1, 3, 5, 7, 2, 11, 10, 3, 4, 8] //-10,-1, 1, 2, 3,4, 5 , 7, 8, 10, 11

// let values2 = [-1, -10,1, 2 , 1, 3, 5, 7, 2,]


// /* values2.sort((a, b) => a - b); */

//                         //undefined
// function returnUniqueValues(arr){
// //sorting
// arr.sort((a, b) => a - b);

// let uniqueArr=[];

// //creating unique array
// 	for(let i=0; i<arr?.length; i++){ //1
// if(i ==0){
// /* console.log(arr[i]) */
// uniqueArr.push(arr[i])
// }else{
// if(arr[i]!= arr[i-1]) uniqueArr.push(arr[i])
// }
// }

// return uniqueArr
// }

// const uniqueValues = returnUniqueValues(values2) 
// console.log(uniqueValues)

