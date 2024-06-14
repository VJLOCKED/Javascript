 //custom method for getting pop() method

 let arr = [1,2,3,4,5,6]
 Array.prototype.pop2 = function() {
 this.splice(this.length - 1, 1);
 return this;
 };

 console.log(arr.pop2());

 arr = [1,2,3,4,5,6]
function customPop(arr) {
    arr.splice(arr.length - 1, 1);
    return arr;
}

console.log(customPop(arr));

// custom method for shift method

 arr = [1,2,3,4,5,6]

 function customShift(arr) {
     arr.splice(0, 1);
     return arr;
 }

 console.log(customShift(arr));

 // custom method for unshift method


 arr = [1,2,3,4,5,6]

 function customUnshift(arr) {
     arr.splice(0, 0, 7);
     return arr;
 }

 console.log(customUnshift(arr));

 // custom method for push() method

 arr = [1,2,3,4,5,6]

 function customPush(arr) {
     arr.splice(arr.length, 0, 7);
     return arr;
 }

 // Using forEach()
 
 arr = [1,2,3,4,5,6]

 let sumOfEachNumbers=function(element) {
 for( i=0; i<arr.length; i){
   let sum = 0
   arr.forEach(element => {sum += element} )
   return sum;
 }

 }
  console.log(sumOfEachNumbers(arr));

  let arr2 = [1,2,3,4,5,6,7]
  function sumOfEachNumbers2(arr2) {
    for( i=0; i<arr2.length; i++){
        let sum =0
        arr2.forEach(element => sum+= element)
        return sum;
    }
}
console.log(sumOfEachNumbers2(arr2))