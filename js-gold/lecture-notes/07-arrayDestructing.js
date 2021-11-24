/*
    Array Destructuring 
        -allows you to unpack values from arrays, or even properties from objects into distinct variables.

    Destructuring uses very similar syntax as array literals, but is instead on the left hand side of the assignment operator, which is where we define what values to unpack from the sources variable (array/object)

    Great for pulling information out of an array/object and assigning that data to its own variable.
*/

// const fullName = ["Gary", "Wonder"];

// const firstName = fullName[0];
// const lastName = fullName[1];

// console.log(firstName, lastName);

// const [firstName, lastName] = fullName;
// console.log("destructured", firstName, lastName);

// What you include in the square brackets on the left side of the operator are variable names for the elements in the array on the right side of the assignment operator.

// What Javascript will do: pull out the values stored in the fullName variable, and assign them based off of their position in the original array, to the variables we declared using destructuring. This is very powerful syntax for spliting an array into variables we can then work with.


/*
    Rest operator

    Syntax looks exactly like spread operator. 

    In a way, rest syntax is the opposite of the spread syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and condenses them into a single element. 
*/

// const fullName = ["Gary", "Wonder", "Mr", {month: 12, day: 18, year: 1985}]

// const [firstName, lastName, ...otherInfo] = fullName;

// console.log(firstName);
// console.log(lastName);
// console.log(otherInfo);

/* 
    Any other values that are now added to our fullName array, will be packaged up with the REST of our data that fillsunder the umbrella of the rest operator declared as otherInfo
    
*/

const fullName = ["Gary", "Wonder", "Mr", {month: 12, day: 18, year: 1985} ,"testOne", 5, null, true, "Happy"]

const [firstName, lastName, , , , ...Info] = fullName;

console.log(firstName);
console.log(lastName);
console.log(Info);

// NOTE: rest operator MUST be the last element when using array destructuring





