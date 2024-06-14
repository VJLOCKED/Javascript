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

// Using Function with arg and no return value

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

// Using unshift() and reverse method

// values1= [-1,-1,2,4,4,10,23,10,2,1]
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

// function using pop() method

// values1= [0,-1,2,7,8,6,5]

// function removeLastValue(arr){
//     arr.sort((a, b) => a - b) // [ -1, 0, 2, 5, 6, 7, 8 ]
//     arr.pop() //8 removed
//     return arr
// }

// console.log(removeLastValue(values1))

// function using forEach() method

// values1= [0,-1,2,7,8,6,5]

// function sumOfEachNumbers(arr){
//     let sum = 0
//     arr.forEach(element => {
//         sum += element
//     });
//     return sum 
// }

// console.log(sumOfEachNumbers(values1))

// function using map() method

// values1= [0,-1,2,7,8,6,5]

// function sumOfEachNumbers(arr){
    
//     let sum = 0

//     arr.map(element => { 
    
//         sum += element
        
//     });

//     return sum

// }

// console.log(sumOfEachNumbers(values1))

// function using concat() method

// let values1= [0,-1,2,7,8,6,5]
// let values2= [9,10,12,13,14,15]

// function concatination(arr , arr2){
//     arr.sort((a,b) => a-b)
//     let newArr = []
//     newArr.push(arr.concat(arr2))
//     return newArr
// }
// console.log(concatination(values1, values2))

