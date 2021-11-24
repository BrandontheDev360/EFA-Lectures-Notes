// let boyBands = {
//     bandName: 'Back Street Boys' ,
//     numberOfMembers: 5 ,
//     isBadboy: true ,
//     memberNames:['AJ', 'Kevin', 'Nick', 'Howie', 'Brian']
// }

// console.log(boyBands.bandName);
// console.log(boyBands.numberOfMembers)
// console.log(boyBands.isBadboy)
// console.log(boyBands.memberNames[1])
// console.log(document);


// // let infoH1=document.getElementById("info");
// // infoH1.innerHTML = boyBands.bandName;

// let h1 = document.querySelector('section');
// let section = document.createElement('h1')
// h1.innerText= boyBands.bandName
// section.appendChild(h1);



// let url = 'url';

// fetch(url)
// .then(res => res.json())
// .then(data=> console.log(data));

// let asyncFunction = async () => {
//     await fetch(url)
//     .then(res => res.json)
//     .then(data => console.log(data));
// }

// let btn = document.querySelector('button');
// btn.addEventListener('click', asyncFunction); // asyncFunction() executes immediately

let baseURL = 'https://api.spacexdata.com/v3/capsules';

let fetchData = async () => {
    await fetch(baseURL)
    .then(res => res.json())
    .then(data => console.log(data));
}
