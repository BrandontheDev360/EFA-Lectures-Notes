// Arrays

/*
    Array is a list-like object whose prototype has methods to perform traversal and mutation operations. (MDN Web Docs)
    - Denoted by []
    - Hold multiple data types
    - Mutable (can be modified)
    - Can be accessed by their index
*/

let make = ["BMw", "Porsche", "Maserati", "Lamborghini"];

console.log(make)

// Accessing by Index

console.log(make [1]) // Square bracket notation returns Porsche starts by 0 (index starts at 0)
// Array indexes start at zero (0)

console.log(typeof make)
// returns an object

console.log(typeof make[1])
// returns string

console.log(make instanceof Array)
// Returns true because 'make' object is an instance of 'Array' constructor

console.log(make[0])

let arr = [] // Array Literal
console.log(Boolean(arr)) // Empty array unlike emptry string returns true


// Array assignment

let arr = ["Summer", "Paul", "Adam"]
console.log(arr)
arr[1] = "Zach"
console.log(arr)


// Creating an Array with a constructor

let countries = new Array("England", "Germany", "USA", "France")

console.log(countries)

// Challenge

let students = ["Andrew" , "Bryson", "Cole", "Dean", ["Jessica", "Steven", "Jonathan"], "Quinton"]

/*
    Dive into a nested array and pull the name Jonathan. Console log it, saying "Hello Jonathan" using string interpolation.
*/

let inner = students[4] 
console.log(`Hello, ${inner[2]}`)

console.log(`Hello, ${students[4][2]}`) // solution using string interpolation


// Methods

/*
    In Object Oriented Programming Language (DDP) is a procedure that is associated with an object. It is a function that lives inside of a class.
    - Denoted by the . at the end of object being worked on 
        - example: array.map()
*/

let carList = ["BMW M5", "BMW Z4M", "Mercedes", "Maserati", "Audi"]

// .length method ---> returns the length of an array (non-indexed)

console.log(carList.length)

/*
    .shift() method ---> removes first element from an array and returns it.
    - returns removed element
    - if array empty ---> returns undefined
*/
console.log(carList)
let removedItem = carList.shift()
console.log(carList)
console.log(removedItem)

console.log(arr.shift())

/*
    .unshift() method ---> adds elements to beginning of an array
        - returns the length of a new array
*/

let newArrLength = carList.unshift("Porsche 911 GT3", "HONDA")
console.log(carList)
console.log(newArrLength) // returns new arr length

/*
    .pop() method ---> removes last array element and returns it
*/

let lastItem = carList.pop()
console.log(carList)
console.log(lastItem)


// Example of using .pop() return statement
let newArr= []

if (lastItem.includes("Mercades")) {
    newArr.unshift(lastItem)
    console.log(newArr)
}

/*
    .push () ---> adds element to the end of an array
        - returns new length of the array
*/
console.log(carList)
carList.push("Lexus")
console.log(carList)

/*
    .reverse() ---> returns reversed array elements
    - This method mutates the array and returns a reference to the same array
    - original array modified
*/

console.log(carList)
carList.reverse()
console.log(carList)

let mystr = "potato"
let mystr2 = mystr
mystr2 = "rice"
console.log(mystr, mystr2)

let item1 = "item 1"
let item2 = item1
console.log(item1, item2)
item1 = "item changed"
console.log(item1, item2)

/*
    .slice() ---> returns copy of an array from start to end (non-inclusive)
        - original array NOT modified
        - parameters are (start, stop (non-inclusive))
*/

console.log(carList.slice(0, 3))

let slicedCars = carList.slice(0, 3)

console.log(slicedCars)

slicedCars.unshift("Toyota")
console.log(slicedCars)
console.log(carList)

let dinnerIdeas = ["bulgogi", "fried chicken", "italian beef", "sad single frozen pizza and cheap wine"]
let newDinnerIdeas = dinnerIdeas.slice(3)
console.log(newDinnerIdeas)


/*
    .splice() ---> changes contents by removing array items and replacing it with something else.
    - parameters are (start, deleteCount, itemToBeAdded)
*/

let months = ["January", "June", "March", "April"]

months.splice(1, 0, "February")
console.log(months)
// adds February in index one and removes nothing

months.splice(0, 3, "Jan")
console.log(months)
// adds Jan and removes January

/* 
    .join() ---> creates and returns new string by concatenating all items in an array
        - (separator)
*/

let greetings = ["Hi", "Hello","welcome", "Guten tag"]

let nakedJoin = greetings.join()
// defaults concatenates using commas
console.log(nakedJoin)

let concatJoin = greetings.join("")
// concatenate with no spaces
console.log(concatJoin)

let dashJoin = greetings.join("-")
//concatenate wtih dashes
console.log(dashJoin)

/*
    .includes() ---> checks if a vlues exists and returns true or false.
*/

let bulldogs = ["Olde English", "English Bulldog", "French Bulldog", "Bullmastiff", "Victorian Bulldog"]

let includesFrenchie = bulldogs.includes("French Bulldog") //case sensitive 

console.log(includesFrenchie)

/*
    .sort() ---> sorts elements as strings in a ascending (default) or descending order
*/

console.log(bulldogs.sort())

let cost = [3, 2, 13, 4]

console.log(cost.sort((a, b) => b - a))

/*
    .forEach ---> executes a function for each element in an array
*/

let grades = [56, 78, 96, 98, 100, 65]

grades.forEach((item, index) => console.log(item, index))

grades.forEach((item, index, myArr)=> myArr[index] = item + 15)

console.log(grades)

/*
    .map() ---> creates a new array with results from the callback function 
*/

let marvelCharacters = ["Captain America", "Black Widow", "Doctor Strange", "Ant Man", "Spider Man"]

let marCharsCaps = marvelCharacters.map(character => character.toUpperCase())

console.log(marCharsCaps)

/*
    .filter() ---> creates a new array with elements that pass the test in a callback function
*/

let = startsA = marvelCharacters.filter(character => character.startsWith("A"))
console.log(startsA)