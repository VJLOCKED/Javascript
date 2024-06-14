// function with string slice() method

let str1="Hi, my name is Vishwa";
let str2="Hi, my name is Vishwanath"
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
}
console.log(truncateString(str1, str2))


// function with substring() method
// includeing start parameter and excluding end parameter

str1 = "Hi, my name is Vishwa"
function subString(str){
    return str.substring(0,str.length -2);
}

console.log(subString(str1));

// function with charAt() method

str1 = "Hi, my name is Vishwa"
function charAt(str){
    return str.charAt(4);
}

console.log(charAt(str1));

// function with charCodeAt() method
//ASCII 

str1 = "Hi, my name is Vishwa"
function charCodeAt(str){
    return str.charCodeAt(4);
}

console.log(charCodeAt(str1));

// function with split() method
//  splits the string into an array of sub-strings

str1 = "Hi, my name is Vishwa"
function split(str){
    return str.split(" ");
}

console.log(split(str1));

//function for string concat()  method

str1 = "Hi, my name is Vishwa"
str2 = " J"
function concat(str3,str4){
    return str3.concat(str4);
}

console.log(concat(str1, str2));

// function for string toLowerCase() method

str1 = "Hi, my name is Vishwa"
function toLowerCase(str){
    return str.toLowerCase();
}

console.log(toLowerCase(str1));

