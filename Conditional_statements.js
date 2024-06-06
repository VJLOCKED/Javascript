
// Given the variable temperature, we want to inform a user about weather conditions.
var weather = function(temperature){
    console.log("The temperature outside is", temperature, "degrees fahrenheit.");
  }
  
  weather(60);

  // if statement
// We can add a statement that will only execute if the temperature meets a certain condition.
var weather = function(temperature){
    console.log("The temperature outside is", temperature, "degrees fahrenheit.");
    
    if(temperature <= 65) {
      console.log("It's getting cold outside. Better wear a jacket!");

    }
  }
  weather(60);
// if-else statements
  var weather=function(temperature){
    if(temperature <= 65) {
        console.log("It's getting cold outside. Better wear a jacket!");}
    else{ console.log("Its moderate temperature")}
      }

    weather(70)

    function weather(temperature){
        if(temperature <= 65) {
            console.log("It's getting cold outside. Better wear a jacket!");}
        else{ console.log("Its moderate temperature")}
          }

    function subscription(isSubscribed) {
        if(isSubscribed) {
            console.log("Welcome back!");
        } else {
            console.log("Please subscribe to receive updates.");
        }

    }
    subscription(false);

// If condition example  with operators

let isSubscribed=1;
if(isSubscribed)
    { console.log("no condition======>")}

if(1 == '1')
    { console.log("hii") }

//excerise : Write a function that indicates whether or not to sell a stock. Use conditional statements to return a Boolean value that: 
//returns true if stockPrice is greater than or equal to sellPrice
//returns false if stockPrice is less than sellPrice

function sellStock(stockPrice,sellPrice){
    if(stockPrice >= sellPrice){
      return (true) ;
    }
    else{
      return (false) ;
       
    }
  }
  console.log(sellStock(100,200))

// Else if condition example

var weather = function(temperature){
    console.log("The temperature outside is", temperature, "degrees fahrenheit.");
    
    if(temperature <= 65) {
      return("It's getting cold outside. Better wear a jacket!");
    } else if (temperature > 65 && temperature <= 80){
      return("It's pleasant outside!");  
    } else {
      return("It's getting hot outside!");
    }
  }
  
  console.log(weather(90))

  //example for multiple else if 

  var weather = function(temperature){
    console.log("The temperature outside is", temperature, "degrees fahrenheit.");
    
    if(temperature <= 30) {
      console.log("It's freezing outside! It'll be best to bundle up.");
    } else if(temperature <= 55) {
      console.log("It's getting cold outside. Better wear a jacket!");
    } else if (temperature <= 75){
      console.log("It's pleasant outside!");  
    } else {
      console.log("It's getting hot outside!");
    }
  }

weather(20);
weather(40);
weather(60);
weather(90);


// USing Ternary operato

let num=10 

console.log(num > 20 ? "true" : "false")

let temperature2 = 15

console.log( temperature2 >35 && temperature2 <=45 ? "Its hot today" : temperature2 >= 25 && temperature2 <35 ? "It's good weather today" :  "It's cool weather today")

//Switch Startement

var wakeUp =function(day){
    if (day==="monday"){
        console.log("Wake up at 7am");
    }else if (day === "tuesday"){
        console.log("Wake up at 8am");
    }else if (day === "wednesday"){   
        console.log("Wake up at 9am");
    }else if (day === "thursday"){
        console.log("Wake up at 10am");
    }else if (day === "friday"){
        console.log("Wake up at 11am");
    }else if (day === "saturday"){
        console.log("Wake up at 12pm");
    }else if (day === "sunday"){
        console.log("Wake up at 1pm");}
        else{
            console.log("Invalid day");
    }
    }
    
    wakeUp("thursday")
    
    //or we can do it easily using Switch statement 
    
    let day2 = "holi"
    
    switch(day2){
        case "mon":
            console.log("Wake up at 7am");
            break;
        case "tue":
            console.log("Wake up at 8am");
            break;
        case "wed":
            console.log("Wake up at 9am");
            break;
        case "thu":
            console.log("Wake up at 10am");
            break;
        case "fri":
            console.log("Wake up at 11am");
            break;
        case "sat":
            console.log("Wake up at 12pm");
            break;
        case "sun":
            console.log("Wake up at 1pm");
            break;
        default:
            console.log("Invalid day");
    }

    let grade = 'B';
let result;
switch (grade) {
    case 'A':
        result = "A (Excellent)";
        break;
    case 'B':
        result = "B (Average)";
        break;
    case 'C':
        result = "C (Below than average)";
        break;
    default:
        result = "No Grade";
}
console.log(result);

// break and contiue

for (let i1 = 0; i1 < 10; i1++) {
    if (i1 === 3) { break; }
    console.log(i1);
  }

  for (let i2 = 0; i2 < 10; i2++) {
    if (i2 === 3) { continue; }
    console.log(i2);
  }