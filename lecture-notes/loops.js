/*
!LOOPS
Loops allow us to go over a block of information or code in a determined amount of cycles. It's important to note that it is possible for us to write code without declaring an endpoint.

Loops help us repeat a process without rewriting a lot of code.
*/

/*
! FOR LOOPS

*Structure

We have to setup our loops in a way that we can 1) See where we are in a loop, 2) Consider what sort of Condition we want to run it against, and 3) Note when we are done with that condition and move on to the next iteration.

    We need to:
    1) Create an Index
    2) Run a condition
    3) Change to the indexing variable (execution of the condition)
*/

//? Let's count to 10:

for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
  /*
  We state our loop with a "for". Within this function, we are injecting some parameters that JS will run against. index; condition; change index -> result.
  
  Within our parameters, we are stating an index declaration to 0. This is baseline. We move on asking if that variable is less than or equal to the number 10, take that set number and add 1 to it's value. Once that is processed, return that value (in this case a console.log of that number). Once our condition is met, we return a FALSE which ends our loop. THIS is important to note:
  
  for(<create index variable>; <run condition>; <change index>) {
      <return results>
      <continue until condition is met>
  }
  */
  
  //? If we do not indicate what our condition is, the loop will not have a finish and thus runs until we have to force close it.
  
  /*
  INFINITE LOOP
   for(let i = 0; i++){   i = i + 1
       console.log(i);
   }
  */    
  
  //No condition means that JS doesn't know when to stop and will never assume that information.
  
  //! CHALLENGE:
  //* Using a for loop, set an index to 2.  Make a condition where if that number is greater than -10, change that index by subtracting 4 and console log each iteration.  2:10p
  
  for (let i = 2; i > -10; i -= 4) {
    console.log(i);
  }
  
  //? We aren't limited by positive or negative numbers. We even cycle through variables assigned with strings.
  
  let word = "supercalifragilisticecpialidocious";
  
  for (let i = 0; i < word.length; i++) {
    //? .length is a method that we can use in JS that helps us determine a value that we may not know.
    console.log(i, word[i]);
    //1) We set a value of each index and are displaying that.
    //2) We set to display the value within the "object" of word. Each character that is assigned to the variable of "word" is provided an index value and this is how we are cycling through it.
    console.log(`The letter ${word[i]} is in position: ${i}`);
  }
  
  /*
  ! FORIN LOOP
  
  With  For loops, we are seeking an index value and running that against a condition. For In Loops don't require us to have an index number.
  */
  
  let city = {
    name: "Indianapolis",
    pop: 8777000,
    speedway: true,
  };
  
  for (info in city) {
    console.log(info);
  }
  
  //? "info" is a placeholder for the information that we are wanting to pull from "city". We could use the "bear" or "potato" and it would produce the same result. BUT, keeping a standard that we are writing code in a "relative" manner and so that people reading it after us can easily follow along, I used "info".
  
  // "info" has shown us the keys within our object.
  
  //? What if wanted to see those values that are represented within the object?
  console.log(city[info]);
  
  /*
  SYNTAX of For In
  for(variable IN object){
      statement
  }
  
  for IN an array:
  */
  let list = ["milk", "eggs", "beans", "meat", "bread", "apples"];
  
  for (item in list) {
    //? What happens if we console.log item? What should we expect?
    console.log(item); //return the index position of our array
    console.log(list[item]);
  }
  //! CHALLENGE
  //* What if a user input their name in an odd way and we want to display it correctly.
  let name = "piCard";
  
  //* Write a for-in loop that pulls in the name, changes each letter to the proper case and then console.log the results.
  
  let propCase; // We've set an empty variable that we plan to assign a value after our loop.
  // 2:50
  
  for (n in name) {
    // "n" is the index value within our variable "name"
    n == 0
      ? (propCase = name[n].toUpperCase())
      : (propCase += name[n].toLowerCase());
    //    1       2                   3             4          5
  }
  console.log(`${propCase}: "Engage!"`);
  
  /*
  1) We are taking the value of the "n" index and declaring a position of 0
  2) We assign our empty variable top equal that positioned value.
  3) If that index is 0, we will take that value and run a ".toUpperCase()" method on it.
  4) If the index is NOT 0, we still want to include it into our empty variable and utilize our += expression so it knows to add the next value (or n++).
  5) If the index is NOT 0, we want to run a ".toLowerCase()" method so that all letters are in the proper case.
  */
  
  /*
  ! ForOf LOOP
  
  In order to run a FOR OF loop, the "thing" must be numbered like an array.
  let object = {
      string: "Peter",
      boolean: true,
      number: 1
  }
  
  for(item of object){
      console.log(item)
  }
  
  ? Because the object isn't indexed like an array, we are unable to loop items "of" that object. We can't be sure what is "of" this particular object.
  */
  
  let indexArray = ["spot 1", 2, true, "not fifth"];
  
  for (let pos of indexArray) {
    console.log(pos, 'was run through a "for of" loop');
  }
  
  /* SYNTAX FOR OF Loop
  for(variable of iterable){
      statement
  }
  */
  //? We are capable of iterating over the values within this array or "of" this array.
  
  /*
  ? Quick Recap:
  for loop: loops through a block of code until the counter reaches a specified number
  for in loop: loops through of an object
  for of loop: loops over iterable objects as arrays and strings *remember, a string can be accesses in much the same way as an array.
  */
  
  //* CHALLENGE
  //* Create an array of animals:  mouse, cat, dog, bird, and pig.  Using a for of loop, console log each animals respective "sound" (ex: 'meow' when it returns 'cat').  3:45p
  
  let animalArray = ["mouse", "cat", "dog", "bird", "pig"];
  for (let animal of animalArray) {
    animal === "mouse"
      ? console.log("squeak")
      : animal === "cat"
      ? console.log("meow")
      : animal === "dog"
      ? console.log("woof")
      : animal === "bird"
      ? console.log("taught I taw a putty tat...")
      : console.log("that's all folks!");
  }
  
  Challenge;
  
  // Create a variable with any number between 0-100.
  // For multiples of 3, print "Fizz"
  // For multiples of 5, print "Buzz"
  // For multiples of 3 and 5, print "Fizz Buzz"
  // If it's not multiples of 3 and 5, print the number itself
  // 4:18
  
  let num = 3;
  if (num % 15 === 0) {
    console.log("FIZZ BUZZ");
  } else if (num % 3 === 0) {
    console.log("FIZZ");
  } else if (num % 5 === 0) {
    console.log("BUZZ");
  } else {
    console.log(num);
  }