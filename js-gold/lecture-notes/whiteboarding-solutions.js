/*
Create a function expression called myName, which takes first and last name as parameters, and returns a string interpolated result.
For ex: pushing “Ryan” & “Reynolds” will result with a return of “Ryan Reynolds.
*/

// Function Expression - Function stored in a variable
let myName = function(fName, lName) {
    return `${fName} ${lName}`
}
console.log(myName("Brandon", "Nguyen"))

//---------------------------------------------

// Function Delcaration

function myName(fName, lName) {
    return `${fName} ${lName}`
}

/*
    Loop over numbers from 0-100. If the number is divisible by 2, interpolate “The number __ is divisible by 2”. If the number is divisible by 5, interpolate “The number is divisible by 5”. If the number is divisible by both 2 & 5, interpolate “The number __ is divisible by 2 & 5”. If the number is neither, interpolate “The number __ doesn’t meet any criteria”.
*/

for (num = 0; num <=100; num++){
    if (num % 10 === 0) {
        return `The number ${num} is divisible by both 2 & 5`
    } else if (num % 2 === 0) {
        return `The number ${num} is divisible by 2`
    } else if (num % 5 === 0) {
        return `The number ${num} is divisible by 5`
    } else {
        return `The number ${num} doesnt meet any criteria`
    }
}

// // Create a function declaration circleCircumference which takes a parameter of radius and returns the circumference. Call the function and console.log its result.
// HINTS:
// Mathematical formula to find circumference of a circle is C = 2*pi*r
// Hardcore pi using 3.14 or utilize Math.PI property

function circleCircumference(radius) {
    // let circleCircumference= 2 * Math.PI * radius
    // return circleCircumference
    return 2 * Math.PI * radius
}

console.log(circleCircumference(20))

// Create an object literal named school with properties of teacher (str), subject (str), and isTenured (bool). Create a property of the student that’s an object which will hold two arrays: name with strings of student names (two or more), and grade integer (two or more)
// Console.log the first student grade
// Reassign that grade to 100 and console log it

let school = {
    teacher : "Paul",
    subject : "Math",
    isTenured: true,
    student: {
        sName:["Mac", "Syerra"],
        grade:[90,80]
    }
}

console.log(school.student.grade[0])
school.student.grade[0] = 100
console.log(school.student.grade[0])