const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const movieTitle = document.getElementById("movie");
const movieYear = document.getElementById("year");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-movie-quote");
const loader = document.getElementById("loader");

function showLoadingSpinner (){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function  removeLoadingSpinner() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// Show New Movie Quote
function showNewQuote () {
    showLoadingSpinner();
    // Pick a random movie quote from apiQuotes array
    const quote = localMovieQuotes[Math.floor(Math.random() * localMovieQuotes.length)];
    movieTitle.textContent = quote.movie;
    movieYear.textContent = quote.year;
    //Check  quote length to determine styling
    if (quote.text.length > 100){
        quoteText.classList.add("long-quote");
    } else {
        quoteText.classList.remove("long-quote");
    }
    //Set Quote, Hide Loader
    quoteText.textContent = quote.text;
    removeLoadingSpinner();
}

//Tweet Quote
function tweetQuote () {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${movieTitle.textContent} (${movieYear.textContent})`
    window.open(twitterUrl, "_blank");
}

//Event Listeners
newQuoteBtn.addEventListener("click", showNewQuote);
document.body.addEventListener("keyup", showNewQuote);
twitterBtn.addEventListener("click", tweetQuote);

//On Load 
showNewQuote();


