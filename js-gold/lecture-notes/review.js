// Create a function to remove the spaces found in a string
// and return a string with spaces removed.
function removeSpaces(string) {
    strRemoved = ""
    for (letter of string) {
        // console.log(letter)
        if (letter != " ") {
            strRemoved += letter
        }
    }
    return strRemoved
}

let adele = "pniemczyk@elevenfifty.org"

console.log(removeSpaces(adele))

function cleanUpEmail(email) {
    let final = ""
    for (i of email) {
        if (!i.includes("^") && !i.includes("/")) {
            final += i
        }
    }
    return final
}

console.log(cleanUpEmail("pn^/iemczyk@elevenfifty.org"))