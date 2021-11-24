// API Promises Fetch Async Await

// API

/*
    Application Programming Interface allows apps to communicate with one another.

    Code that allows us to access points from the client (browser) to the server (could be our own or one from an API we're pulling dataReceived from, such as SpaceX)

    API works through sending HTTP requests from our client (browser) and receiving HTTP reponses from the server.

    This happens using REST API, which stand for Representational State Transfer.

    It is a service that allows us to send specific request and receive specific reponses in state-less client-server communication.

    HTTP request can have severl piece of info attached to it:
        - Endpoint (URL) - where we are going
        - Query Strings (in URL) to pass info to the server without request body (only in a GET request)
        - Header - metadata
        - Body - where request/reponse info is being stored (only in POST, PUT, DELETE)

    HTTP reponse is received from the server after client's HTTP request
        - Reponse body - information served to us (payload)
        - Reponse code - tells us what happened wtih our request
            - 200 - all
            - 404 - not found
            - 500 - server error
            - 403 - forbidden

*/

// Promises

/*
    Promise represents a value that is unknown when the promise is created, but represents the eventual fulfilled value or rejection.
        - Pending: intial state (not fulfilled nor rejected)
        - Fulfilled: completed successfully
        - Recjected: operation failed
*/


let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
    if (1 + 1 == 2)  {
        resolve("success")
    } else {
        reject("Failed. It did not resolve.")
    }    
    }, 5000)

})

console.log(myPromise)

myPromise
    .then(dataReceived => console.log(myPromise, dataReceived)) // needs two parameters to resolve promise
    .catch(err => console.log(myPromise, err)) // needs two parameters to solve promise



    //Old school way of sending requests
// function reqListener(){
//     console.log(this.reponseText)
// }
// const request = new HMLHttpRequest()
// request.addEventListener("load", reqListener)
// request.open("GET", "https://api.spacexdata.com/v3/capsules/upoming")
// request.send()

// Fetch

/* 
    Fetch API is asynchronous method and is part of a browser window. It returns a promise that can be resolved into a reponse object.
*/

fetch("https://api.spacexdata.com/v3/capsules/upcoming")
    .then(res => res.json()) // .then is a promise resolver method. Method is a function. At the end of a function it returns something. Requires a parameter so we add one.
    .then(dataReceived => console.log(dataReceived))
    .catch(err => console.log("oops, one of the promises did not resolve."))

// Asynchronous Functions

/*
    Introduced in ES8 Async allows us to avoid chaining promises. Allows us to write async code in a sychronous matter and run applications concurrently.
    Still returns a promise, just like fetch.
*/

// async function declaration() {
//     //await
// }

// let asyncFxExpression = async function () {
//     //await 
// }

// let asyncArrowFxExpression = async() => {
//     // await
// }

function regularJankyFx() {
    return "Just returns the dataReceived without no promises."
}
console.log(regularJankyFx())

async function myAsyncFunction() {
    // return "This is my async function declaration"
    return Promise.resolve("This is my async function declaration")
    // Return Promise is what happened when return runs inside async function
}

let h1 = document.createElement("h1")
document.body.appendChild(h1)
// h1.innerText = regularJankyFx() // may be janky but it rends its retunr in our h1 tag.
// h1.innerText = myAsyncFunction() // retunrs to us some useless (object Promise) text
console.log(myAsyncFunction()) 

myAsyncFunction().then(dataReceived => {
    // renders us the retunr string of a fx because were resolving it.
    h1.innerText = dataReceived
})



// To be discussed at a later time.
//------------------------------------------------------------------
// let asyncFxWithAwait = async() => {
//     let result = await "Async Arrow Fx Expression with Await"
//     console.log(result)
// }

// console.log(asyncFxWithAwait().then(dataReceived => console.log(dataReceived)))


async function getSpaceXData() {
    let res = await fetch("https://api.spacexdata.com/v3/capsules/upcoming")
    let dataReceived = await res.json()
    console.log(dataReceived)
    for (eachInstanceofData of dataReceived) {
        console.log(eachInstanceofData.details)
    }
    
}

getSpaceXData()

// Async Function returns promise --> 
// Fetch returns Promise with Reponse object neseted --> 
// Await added to fetch returns Reponse object -->
// .json() method returns Promise (part of Reponse interface) with dataReceived nested inside it. -->
// await added to .json() method resolves .json() returned Promise and gives us our dataReceived ONLY.
// Now we are ready to work with our dataReceived. 