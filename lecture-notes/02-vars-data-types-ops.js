// Javascript
/*
    JavaScript was founded in 1996 by Brandon Eich
        -client side language (runs in the browser)
        -interpreted (not compiled)
        -object oriented
        -ECMAScript which is an organization that sets language standards
    */

// Comments
/*
    Lines or blocks of code that are not being interpreted by the parser.
    -Denoted by // for single line
    -Or like the existing comment that allows many lines of code.
    -Comments get read but are not executed
    -Beneficial in documenting maintainable codebase
    */

    //Variables

    /*
    Containers that store data in memory.
    -declaration
        -allowing the memory space to be reserved
        -declarations start with let or var
        -declarations cannot start with a number, or most characters other than $ or _.
        -default value is undefined
        -loosely typed language (no need to declare data type)
        -intialization
    */

    let firstName;
    // console.log(firstName)

    var lastName;
    // console.log(lastName)

    // const age;
    // Missing Initializer Error. Const must always be declared AND initialized.
    // console.log(age)

    // Coding Practices for Variables
    /*
        -Be concise(example:firstName instead of usersFirstName)
        -Be specific(example:getValue instead of i)
        -Utilize camelCase, snake_case, PascalCase, or skewer-case.
        -You can also utilize nocase or SCREAMING_CASE
    */

    // Javascript Conventions
    /*
    Camel case for variables and methods.
    Pascal case for types and classes in JavaScript.
    Upper case snake case for constants
*/

// Variable Initialization
/*
    The data value that is given to a variable declaration.
    -Can be anything(string,integer,array,function,class,etc.)
    -Can be reassigned (apart from const)
*/
// (a)  (b)      (c)
let address="430 N Park";
console.log(address)
/*
    (a) variable declaration
    (b) variable identifier
    (c) value or initializer
*/

// redeclare variables with different initializers
address="157 W Ohio St";
console.log(address);

console.log(firstName, lastName);

firstName = "Summer"; 
lastName = "Kerekes";
console .log(firstName, lastName)
// semicolons (;) are needed to end the line of code. Important for JavaScript

const ssn = 123456789
console.log(ssn)

// ssn = 559990000
// console.log(ssn)
// ERROR! TYPEERROR: assignment to constant variable
// Const variables cannot be reassigned!
// Preferred declaration is let instead of var

let text = "Hey \"text\""
console.log(text)

// Data Types
/*
    JavaScript has several data types taht can be used. They are:
        -Boolean
        -Null
        -Undefined
        -String
        -Number
        -Array
        -Object
*/

// String
/*
    Data type used to represent text in a single or double quotes.
    Primitive Data Type
*/

let myString = "This is a string data type"
myString= 'Can be in single quotes'

// Template literal
myString ='This is a template literal string'
console.log(typeof myString) // type of returns data type
//Numbers
let degrees = 90;
console.log(typeof degrees)

let precise = 999999999999999;
console.log(precise)
// 15 numbers does not round up

let rounded = 9999999999999999;
console.log(rounded)
// 16 numbers rounds up

let decimalAddition = 0.2 + 0.1;
console.log(decimalAddition)

let strToNum = Number("123");
console.log(typeof strToNum)

// Boolean
// Two possible values: true (on) or false (off)

let on =true;
console.log(on)

let off=false;
console.log(false)

// Undefined
// No value is assigned and does not act as empty container

let undef = undefined;
console.log(undef)

let correct;
console.log(undef)

// Null
// Null is an empty value. Container with nothing in it.

let empty = null;
console.log(empty)

// Null vs Undefined
/*
    -Null is like a container with nothing in it
    -Undefined means variable has never been set or created.
*/

// Data Type Literalss
// When developer inserts a vlue into a data type

let strliteral = "This is a string literal"

// Arrays
// Container holding a list of items

let students =["Dean", "Cole", "Kiersten"];
console.log(typeof students) // returns object

// Object
// Stores many values

let student = {
    name:"Cole",
    age:20,
    graduated:false,
}
console.log(typeof student)

// Operators

let fName="Brandon"
let lName="Nguyen"
let hNumber=908
let city="Kokomo"
let state="IN"
let postCode = 46902
let myaddress=fName + " " + lName + "\n" + hNumber + " " + city + ", " + state + " " + postCode;
console.log(myaddress)

let cars;
console.log(cars)