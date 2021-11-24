const apiUrl = 'https://rickandmortyapi.com/api/location/';
let input = document.getElementById("locationId")
let button = document.getElementById("getLocation")
let pText = document.getElementById("locationName")


const retrieveLocation = async (id) => {
    const result = await fetch(apiUrl + id)
    const data = await result.json()
    return data.name()
    }
