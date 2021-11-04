/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat
  
/*** 
 * `quotes` array 
***/
const quotes = [
  {quote: "The story you tell yourself is largely the story you are living",
   source: "Terrance Mckenna"},
  {quote: "We are all just walking eachother home.", 
   source:"Ram Dass",
   citation: "Be Here Now"},
  {quote: "Silence is a source of great strength", 
   source: "Lao Tzu",
   year: "4th century B.C"},
  {quote: "You are not a drop in the ocean. You are the entire ocean in a drop", 
   source: "Rumi"},
  {quote: "Knowledge is limited.", 
   source: "Albert Einstein"}
]; 
/**
 Creating a getRandomQuote function to retrieve a quote at random from the array of quotes
 */
function getRandomQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[random];
  return randomQuote
};

/**
 Creating a function to join quotes, sources, citation, and year to the HTML file
 */
function printQuote() {
  
  const randomQ = getRandomQuote();
  let html = '<p class="quote">' + randomQ.quote + '</p>' + '<p class="source">' + randomQ.source + '</p>';
  if (randomQ.citation) {
      html += ' <span class="citation">' + randomQ.citation + '</span>';
  };
 
  if (randomQ.year) {
    html += ' <span class="year">' + randomQ.year + '</span>';
  };
    html += '</p>';
  
    document.getElementById('quote-box').innerHTML = html; 
  
};



document.getElementById('load-quote').addEventListener("click", printQuote, false);

