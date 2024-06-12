// Variable hoisting
console.log (temp);
    var temp = "Coding Ninja"

    //var is function scope , not block scope

    var temp = "Hello World";
    var count1 = 4;

    if (count1 > 3) {
        var temp = "Hello coders"; 
    }
    
    console.log(temp) // "Hello Coders"

    //let is block scope

    let arr = "hello world";
  let count2 = 4;

  if (count2 > 3) {
        let arr = "hello coder";
        console.log(arr);// "hello coder".
    }
  console.log(arr) // "Hello world".

  // var can be redeclared
  var num1=0
  var num1=10
  console.log(num1) // 10

  //let cant be redeclared
//   let num2=0
//   let num2=10
//   console.log(num2) // error

  // var can be reassigned
  var num3=0
  num3=12
  console.log(num3) // 10

  //let cant be reassigned
  let num4=0
  num4=15
  console.log(num4) 

  // let hoisting (not hosited) 
  // let variables are not initialized like var , we get error 
  // console.log(num5) // throws error
  // let num5=10

  // Const cannot be redeclared, they should be intitialised just after declaring them.
  // Const are block scoped
  // Const hoisting (not hoisted): The const variable also gets notched at the top just like var and let but it is not initialized.

