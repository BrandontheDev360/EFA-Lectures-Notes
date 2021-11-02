// Functions

/*
    Function is a block of reusable code that can take in parameters (door), perform an action, and return the result.
    There are two types of functions:
    - function declaration
        - are hoisted
    - function expression
        -arrow functions
        - are NOT hoisted
    Functions have default return statement of undefined unless otherwise specified.
    */

/*  SYNTAX: 
    function identifier(parameters_if_any) {
        block of code to run
        return statement
    }
*/

function funDeclaration(){
    //console.log("This is a function declaration")
    return "This is a function declaration's return statement"
}

// Function will not run until it is invoked (called)
// Parentheses immediately invoke the function

console.log(funDeclaration()) // Will not show until wrapped in console.log

let funResult = funDeclaration()

console.log(funResult)

// Functions can have none or many parameters
// Parameters act as doors to let arguments inside of a function

function greetUser(fullName) {
    return `Good day, ${fullName}`
}

console.log(greetUser())
// returns undefined because no parameter is given
console.log(greetUser("Kiersten"))
// returns "Good Day, Kiersten" because we gave the parameter a string argument of "Kiersten"

let userName1 = "Cole"
let userName2 = "Quinton"
let userName3 = "Emily"

console.log(greetUser(userName1))

function genereateEmail(email, title, signature,suckersName) {
    return `To: ${email}
            Title ${title}
            Hello Mr ${suckersName}, we have been trying to reach youabout your cars extended warranty
            Sincerely, ${signature}`
}

console.log(genereateEmail("suckers@gmail.com", "Paul", "Warranty", "Mr. Scam"));

// Function Expression
/*
    Function expression utilizes a variable as a placeholder.
    Function expressions are not hoisted.
*/

/*
    let indentifier = function(parameters) {
        block of executable code
        return statement
    }
*/

let myDog = function(name, breed) {
    return `My dog ${name} is a ${breed}`
}

console.log(myDog("Bentley", "Olde English Bulldog"));

// Arrow Functions
/*
    Introduced in ES6
    More concise way of writing functions
    Do not have its own bindings for this or super and should not be used as methods.
    Arrow functions are created using function expressions ONLY
*/

// Concise Body Arrow Functions
// Can only have one parameter if its not enclosed by ( )
// Can have implicit return statement ONLY

let greetEveryone = () => console.log("Hello Class!")
greetEveryone ()

/*
    Same as:
    let greetEveryone = function() {
        console.log("Hello Class!")
    }
*/

let greetPerson = person => console.log(`Hello ${person}`)
greetPerson("Summer")

// Paraentheses around parameters needed only if none or many are present.


// Block Body Arrow Functions
// EXAMPLE ARROW FUNCTION
//---------------------------------------

let sendEmail = (email, name) => {
    return `Hello ${name}:
    
    This is to inform you that you are learning Javascript.
    
    Good on you! We can send some swag to ${email}
    
    Sincerely,
    
    Paul & Summer`
}

console.log(sendEmail("brandonthedev360@gmail.com", "Brandon"));

// Function and their return statements
// Functions can only return one value. More than one value requires grouping into an array, object, or set

function twoNums(num1, num2) {
    return [num1, num2]
}

console.log(twoNums(5, 7)) ;
//---------------------------------------

function twoNums(num1, num2) {
    return new Set([num1, num2])
}

console.log(twoNums(5, 7));

// Challenge

/*
    Create a function declaration called addNums that takes two number and returns a result.
*/

function addNums(number1, number2) {
    return number1 + number2
}

console.log(addNums(5,7));

// Concise Arrow function expression solution

let addNumss = (num1, num2) => num1 + num2

console.log(addNumss(12,9));

// Immediately Invoked Function Execution
/*
    Function declaration that has no name and is immediately invoked.
*/

(function() {
    console.log("IIFE")
})();

// Challenge
/*
    Create arrow function expression named tipCaclulator.
    It will take pre-tax bill, sales tax, and tip percentage.
    It will return string interpolated bill total and tip amount.
*/

let tipCalc= (bill, saleTax, tipPercent) => {
    let taxAmt = bill * (saleTax /100);
    let totalBill = bill + taxAmt
    let totalTip = totalBill + totalTip
    let billTotal= totalBill + totalTip
    return `Your bill is ${billTotal} of which the tip is ${totalTip}`
}

console.log(tipCalc(100, 8, 20))

// Challenge
/*
    Create a function of your choice (declarationor expression) named capitalizeName.
    It takes one parameter
    It capitalizes the first letter of the name and returns the full name to you
*/

/*
    function capName(param) {
        1.Isolate the first letter of param
        2.Return capitalized first letter and the rest of the name
    }
*/

// Index starts at 0

function capName(name) {
let lowerCase = name.toLowerCase()
let fLetter = lowerCase[0].toUpperCase()
lowerCase = lowerCase.substr(1)
let restName = lowerCase.substr(1)
console.log(restName)
return fLetter + lowerCase
}

console.log(capName("PAUL"))
//----------------------------------------------------------------------------
function capName(name) {
   // let lowerCase = name.toLowerCase()
    return name[0].toUpperCase() + name.toLowerCase().substr(1)
}

console.log(capName("BRANDON"))