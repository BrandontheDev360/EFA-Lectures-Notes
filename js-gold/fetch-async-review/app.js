// async function getData() {
//     let reponse = await fetch ("https://api.spacexdata.com/v3/capsules")
//     let data = await reponse.json()
//     // console.log(reponse)
//     console.log(data)
// }
// getData()


// fetch("https://api.spacexdata.com/v3/capsules")
// .then(response => response.json())
// .then(data => console.log("second", data))
// .catch(err => console.log(err))

// fetch("https://swapi.dev/api/people/")
// .then(res => res.json())
// .then(data => console.log(data))


// fetch("https://swapi.dev/api/people/")
// .then(function(res) {
//     return res.json()
// })
// .then(function(json) {
//     console.log(json)
// })


/*
    * Purpose to get data from an API
    * Once we get the data from the API want another fx to generate our elements
    * The API will return our data and then that data will be injected into the function invokation through its parameter
*/

async function getData() {
    let res = await fetch("https://swapi.dev/api/people/") // await == .then()
    let data = await res.json()
    let result = data.results
    console.log(result)
}

getData()

function displayData(info) {
    let ul = document.createElement("ul")
    document.body.appendChild(ul)
    for (item of info) {
        console.log(item)
        let li = document.createElement("li")
        li.innerText = item.name
        ul.appendChild(li)
    }
}



//-------------------------------------------------------
// function generateData(data) {
//     let ul = document.createElement("ul")
//     document.body.appendChild(ul)
//     for (i of data) {
//         let li = document.createElement("li")
//         li.innerText = data.name
//         ul.appendChild(li)
//     }
// }
//----------------------------------------------------------
// async function getData() {
//     let res = await fetch("https://swapi.dev/api/people/") 
//     let data = await res.json()
//     let results = data.results
//     generateData(results)
// }
//------------------------------------------------------------------
let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2 ) {
        resolve("Success")
    } else {
        reject("Failed")
    }
})


p.then(message => console.log("This is in the then" + message))
p.catch(message => console.log("Shit hit the fan " + message))