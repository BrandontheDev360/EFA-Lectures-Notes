// Objects

/*
    Objects - containers for values in a Javascript Object
    Notation format (JSON) - JavaScript Object Notation
        -exist as a string
        - has properties and methods
        - .property
        - .method()
*/

let student = {
    // key : value pairs which are comma separated (,)
    fName: "Connor",
    lName: "Hughes",
    address: "123 Main St",
    isEnrolled: true,
    balanceOwed: 7450,
}

console.log(student)
console.table(student)
console.log(student.fName) // access using key
console.log(student["balanceOwed"]) // access using object key 
let returnKeys = Object.keys(student)
console.log(returnKeys)

// think of string as text
// think of boolean as true/false
// think of number as number

// Object property reassignment

student.balanceOwed = 0 // property reassignment
console.log(student)
console.table(student)

student.address = "123 Lincoln Dr" // property reassignment
console.table(student)

student["isEnrolled"] = false // object key reassignment
console.table(student)

student.isEnrolled = true // property reassignment
console.table(student)

let studentValues = Object.values(student) // values method 
console.log(studentValues)

// Object Constructor

let client = new Object();
console.log(client)

client.firstName= "Paul"
client.lastName= "Niemczyk"
client.birthYear= 1990
console.table(client)


let manager = {
    name: "Summer Kerekes",
    position: "manager",
    isActive: true,
    department: "technology",
    reportsTo: [
        "Paul", "Adam", "Ing"
    ],
    caresFor: {
        trainees: ["Corynne", "Isaiah"],
        learnA:["Adam", "Chelsey"]
    }
}

manager.caresFor.learnA.push("Jonathan")
console.log(manager)

console.log(`This ${manager.position} reports to ${manager.reportsTo[2]}`)
console.log(manager.caresFor.trainees)

// Challenge
/*
    1. Console.log that this manager reports to Ing.
    2. Console.log who Summer cares for when it comes to trainnes
    3. Add "Jonathan" to the learning assistants arrays
*/

// Challenge

    const presidents = [
    { first: 'George', last: 'Washington', year: 1732, passed: 1799 },
    { first: 'John', last: 'Adams', year: 1735, passed: 1826 },
    { first: 'Thomas', last: 'Jefferson', year: 1743, passed: 1826 },
    { first: 'James', last: 'Madison', year: 1751, passed: 1836 },
    { first: 'James', last: 'Monroe', year: 1758, passed: 1831 },
    { first: 'John', last: 'Adams', year: 1767, passed: 1848 },
    { first: 'Andrew', last: 'Jackson', year: 1767, passed: 1845 },
    { first: 'Martin', last: 'Van Buren', year: 1782, passed: 1862 },
    { first: 'William', last: 'Harrison', year: 1773, passed: 1841 },
    { first: 'John', last: 'Tyler', year: 1790, passed: 1862 },
    { first: 'James', last: 'Polk', year: 1795, passed: 1849 },
    { first: 'Zachary', last: 'Taylor', year: 1784, passed: 1850 },
    { first: 'Millard', last: 'Fillmore', year: 1800, passed: 1874 },
    { first: 'Franklin', last: 'Pierce', year: 1804, passed: 1869 },
    { first: 'James', last: 'Buchanan', year: 1791, passed: 1868 },
    { first: 'Abraham', last: 'Lincoln', year: 1809, passed: 1865 },
    { first: 'Andrew', last: 'Johnson', year: 1808, passed: 1875 },
    { first: 'Ulysses', last: 'Grant', year: 1822, passed: 1885 },
    { first: 'Rutherford', last: 'Hayes', year: 1822, passed: 1893 },
    { first: 'James', last: 'Garfield', year: 1831, passed: 1881 },
    { first: 'Chester', last: 'Arthur', year: 1829, passed: 1886 },
    { first: 'Grover', last: 'Cleveland', year: 1837, passed: 1908 },
    { first: 'Benjamin', last: 'Harrison', year: 1833, passed: 1901 },
    { first: 'William', last: 'McKinley', year: 1843, passed: 1901 },
    { first: 'Theodore', last: 'Roosevelt', year: 1858, passed: 1919 },
    { first: 'William', last: 'Taft', year: 1857, passed: 1930 },
    { first: 'Woodrow', last: 'Wilson', year: 1856, passed: 1924 },
    { first: 'Warren', last: 'Harding', year: 1865, passed: 1923 },
    { first: 'Calvin', last: 'Coolidge', year: 1872, passed: 1933 },
    { first: 'Herbert', last: 'Hoover', year: 1874, passed: 1964 },
    { first: 'Franklin', last: 'Roosevelt', year: 1882, passed: 1945 },
    { first: 'Harry', last: 'Truman', year: 1884, passed: 1972 },
    { first: 'Dwight', last: 'Eisenhower', year: 1890, passed: 1969 },
    { first: 'John', last: 'Kennedy', year: 1917, passed: 1963 },
    { first: 'Lyndon', last: 'Johnson', year: 1908, passed: 1973 },
    { first: 'Richard', last: 'Nixon', year: 1913, passed: 1994 },
    { first: 'Gerald', last: 'Ford', year: 1913, passed: 2006 },
    { first: 'Jimmy', last: 'Carter', year: 1924, passed: undefined },
    { first: 'Ronald', last: 'Reagan', year: 1911, passed: 2004 },
    { first: 'George', last: 'Bush', year: 1924, passed: 2018 },
    { first: 'Bill', last: 'Clinton', year: 1946, passed: undefined },
    { first: 'George', last: 'Bush', year: 1946, passed: undefined },
    { first: 'Barack', last: 'Obama', year: 1961, passed: undefined },
    { first: 'Donald', last: 'Trump', year: 1946, passed: undefined },
];

/*
    Utilize a filter method to create a new array with presidents who were born after 1900s.
*/


let presidents1900 = presidents.filter(president => president.year >= 1900)

// Above is the same as this:
let myarr= [] // global scope can be accessed by console
for (i of presidents1900) {
    // let myarr= [] cant be accessed by console because it is in block scope
    if (i.year >= 1900) {
        myarr.push(i)
    }
    
}
console.log(myarr)


/*
let presidents1900 = president.filter(function(president){
    if (president.year >= 1900) 
    return president
})
*/
console.log(presidents1900)

/*
    With your brand spankin' new filtered array, utilize forEach method and print me a string interpolated name of these presidents.
*/

presidents1900.forEach(({first, last}) => console.log(`${first} ${last}`))

presidents1900.forEach(president => console.log(`${president.first} ${president.last}`))

