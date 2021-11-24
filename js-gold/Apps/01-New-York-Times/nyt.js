const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; // 1 API URL endpoint
const key = 'CACa4rkU2H7JXQKvJWKelNeOnnTftoGI'; // 2 API Key required by the API to access data from the API
let url; //3 declare variable to use it later when we need it.

// SEARCH FORM
// lines below, we are connect our html elements to our js file
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form')
const submitBtn = document.querySelector('.submit');

// RESULTS NAVIGATION
const nextBtn = document.querySelector('.next')
const previousBtn = document.querySelectorAll('.prev')
const nav = document.querySelector('nav');

// RESULTS SECTION
const section = document.querySelector('section');

// grabbing our nav tag referencing it from line 13, and setting the display to none
nav.style.display = 'none';
let pageNumber = 0; // we set the intial state of page number to 0
let displayNav= false;

searchForm.addEventListener('submit', fetchResults); // we reference the searchFrom var, we use a submit eventlistener, and pass in the fetchResults function to activate when we submit the form
nextBtn.addEventListener('click', nextPage);// we reference the prev && next button and we pass in our nextPage and previousPage functions
previousBtn.addEventListener('click', previousPage);

async function fetchResults(e) { // function declaration, the function responds to an event, so we pass in "e"
    // console.log(e);
    e.preventDefault(); // when the event happens, we want to use the preventDefault() method that prevents page from refreshing.

    // referencing var on line 3 and assigning it a value, combining the basedURL + API key + pageNumber + searchTerm.value
    // NY docs tell us how to contruct the url depending on what we want the url to do/look like
    url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`; 
    // console.log('URL:', url);

    if (startDate.value !== '') { // setting up our if statement, if the value of the startdate value is not equal to empty string, continue procedure.
        // console.log(startDate.value)
        url += '&begin_date=' + startDate.value; // URL is equal to URL + '&begin_date=' + the value of the startDate input.
        // console.log('URL:', url);
    }

    if (endDate.value !== '') { // setup if statement, if the value of endDate is not eqal to an empty string, continue procedure.
        // console.log(endDate.value)
        url += '&end_date=' + endDate.value;
        // console.log('URL:', url);
    }

// GROUP TWO

    await fetch(url) // make an http request to api
        .then(function (result) { // waiting for the results/promise similar to async/await. wait for promise resolver.
            console.log(result)
            return result.json(); // returning json data, data is converted to json via json method
        })
        .then(function (json) { // after data get jsonified, and json variable now contains all of our data
            console.log(json);
            displayResults(json);// calling the functions and were passing in the json data as an argument
        })
}

function displayResults(json) { // function declaration, naming it, giving a parameter of json
    console.log('Display Results', json);
    // console.log(json.response.docs);

    while (section.firstChild) { // setting up a while loop, passing in a condition, if there is a child element in the section
        section.removeChild(section.firstChild); // remove the first child element in the section, makes it so new results dont stack up on eachother.
    }

    let articles = json.response.docs; // creating a var called article, setting it equal to json console log dot notation to .reponse and then to .doc 
    // console.log(articles);

    if (articles.length === 0) { // were checking to see if the length of the array is 0
        alert('No results');
    } else {
        for (let i = 0; i < articles.length; i++) { // set up for loop, set i to 0, if i less than the length of article array.
            // i = i +1
            // console.log(i);
            // Creating vars, we grab hold of document object, then create an element for document, and we
            // dynmically create different html tags to hold data for us. 
            let article = document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let img = document.createElement('img');
            let para = document.createElement('p');
            let clearfix = document.createElement('div');
            let currentIndex = articles[i]; // articles is an array. Defining that index the article is in the results

            console.log('Current:', currentIndex);

            link.href = currentIndex.web_url; //references the web_url property for the corresponding article in the search 
            link.textContent = currentIndex.headline.main; // reference headline.main property in headline object and inserts the string
            // inserts the string as the text
            para.textContent = 'Keywords: '; // inserting string 'Keywords:' using dom because para didnt exist in HTML
            // setting up loop, setting default state to 0, checks for the amount of keywords in article
            for (let j = 0; j < currentIndex.keywords.length; j++) {
                let span = document.createElement('span'); // creating a variable called span, and creating a span tag wtih dom manipulation.
                span.textContent += currentIndex.keywords[j].value + ' '; // span tag inline container and style it separately. creating lines of text without breaking.
                // adding keywords separated by space to span tag.
                para.appendChild(span); // attaching the span tag to the para element we have created
            }

// GROUP THREE

            if (currentIndex.multimedia.length > 0) { // checking if there is multimedia array is > 0
                img.src = 'http://www.nytimes.com/' + currentIndex.multimedia[0].url; // adding url src to our img tag, inserts first index as the url.
                img.alt = currentIndex.headline.main; // if there is not an image, the alt will be the headline
            }

            clearfix.setAttribute('class', 'clearfix'); // assigning attribute of class to the div named 'clearfix'
            // adding link tag to heading
            heading.appendChild(link);
            // with article adding heading tag
            article.appendChild(heading);
            // adding img tag to article
            article.appendChild(img);
            // adding para tag to the article
            article.appendChild(para);
            // adding clearfix tag to the article
            article.appendChild(clearfix);
            // then section, appending it wtih article (contains all of our information per article)
            section.appendChild(article);
        }
    }

    if (articles.length === 10) { // if article is strictly equal to 10
        nav.style.display = 'block'; // display the nav 
    } else {
        nav.style.display = 'none';// if not, dont display nav
    }
}

function nextPage(e) {
    // console.log('Next button clicked');
    pageNumber++;// when the button is clicked add one to the default state of our page number
     // which is initially 0
    fetchResults(e);
    //console.log('Page Number:', pageNumber);
}

async function previousPage(e) {
    // console.log('Previous button clicked');
    if (pageNumber > 0) { // if page number is greater than 0 when button is pressed go to previous
        pageNumber--;
    } else {
        return;
    }

    fetchResults(e);
    console.log('Page:', pageNumber);
}
//ONLY FUNCTION DECLARATIONS ARE HOISTED!!!!!!!!