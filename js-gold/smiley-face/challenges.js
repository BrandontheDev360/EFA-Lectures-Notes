//Challenge
//Write a function that accepts two names as parameters, and then prints the full name to the console.     


function greetPpl(fName, lName) {
console .log (fName + "" + lName)
}
// console.log(greetPpl("Test", "Example"))

// Challenge #2:
//  Write a program that prints all numbers from 0-100.
// for multiples of 6, instead of the number, print 'Fizz'
// for multiples of 8, instead of the number, print 'Buzz'
// for multiples of 6 AND 8, instead of the number, print 'Fizz Buzz'     

let i = 56;

For (i = 0; i<=100; i++) {
    if (i % 24 ==0) {
        console.log('Fizz Buzz')
    }else if (i % 6 ==0) {
        console.log('Fizz')
    } else if (i % 8 ==0) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
}


// Challenge #3:
//  Write a function called findParameter() that accepts 2 parameters called: "length" and "width".
// The function should return an interpolated string of "True.  The perimeter is ___" if the perimeter is over 20.
// The function should return an interpolated string of "False.  The perimeter is ___" if the perimeter is under 20.  
// This function should be active.   

function findParameter(length, width) {
    let i = 2*(length + width)
    if (i >=20) {
        console.log(`true, parameter is ${i}`)
    } else if (i < 20) {
        console.log(`false, parameter is ${i}`)
    } else {
        console.log(i)
    }
}
console.log(findParameter(2,4))


// Challenge #4:
//  Create an object literal called "library".
// The library object will contain 3 properties: name, address, sections.
// Name and address will both hold values that are strings.  This information can be fabricated.
// Sections will be an object that will store a property called "collections", which is an array of more objects.  You should include at least 2 objects inside the collections array.
// the objects stored in the collections array will hold properties of classification, count, and aisle.
// both the classification and aisle properties should hold strings as values, and count should hold a value that is a number.

let library = {
    name: "123 Library"
    address: "12 Main St"
    sections: {
        collections:[
            {classification:"something", count:2, aisle: "22"},
            {classification:"something", count:2, aisle: "22"}
        ]
    }
}
