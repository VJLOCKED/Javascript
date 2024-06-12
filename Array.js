let arrayOne = [1, "one" ,true ]

console.log(arrayOne.length)
console.log(arrayOne[1])

for(i=0 ; i<arrayOne.length ; i++)
    {
        console.log(arrayOne[i])
    }

arrayOne.forEach(element => console.log(element))

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
