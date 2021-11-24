// Callback Function

function callbackFunction(){
    const data = {
        name: 'Ralf Machio',
        age: 66,
        occupation: 'Kickboxing'
    }
    return data;
}

function showGreeting(dataFromFunction){
    return "Hello " + dataFromFunction.name + ", I hear you're the greatest?!"
}

console.log(showGreeting(callbackFunction()))

// Promises

//Boolean Declaration

var amIGood= false; // boolean delcaration of naughty or nice. Defines variable

// Promise
var iCanHasGift = newPromise( // the promise itself
    function (resolve, reject) {
        if (amIGood){ // variable define whether naughty or nice
            var gift = {
                brand : 'HasMattelbro',
                item: 'Turbo-Man action figure'
            };
            resolve(gift); // fulfilled
        } else {
            var naughty = "You've made Santa's naughty list; enjoy your coal!";
            reject(naughty); // rejected
        }
    }
);

// Proper Syntax for a promise 

// new Promise (/* executor */ function (resolve, reject){...});

// Promise Call

var checkTwice = function () {
    iCanHasGift
    .then(function(fulfilled) {
        // nice list = gift
        console.log(fulfilled)
        // output: {brand: "HasMattelbro", item:"Turbo-Man action figure"}
    })
    .catch(function(error){
        //naught list = coal
        console.log(error);
    })
}
checkTwice();