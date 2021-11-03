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


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array
  const random = Math.floor((Math.random() * quotes.length) );
  // 2. Use the random number variable and bracket notation 
  // to grab a random object from the `quotes` array, and 
  // store it in a variable
  let randomQuote = quotes[random];
  // 3. Return the variable storing the random quote object
  console.log(randomQuote);
  return randomQuote
}

getRandomQuote();


/***
 * `printQuote` function
***/




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);