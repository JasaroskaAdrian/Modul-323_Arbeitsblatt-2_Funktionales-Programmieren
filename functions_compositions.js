//Aufgabe a
const R = require('ramda');
const sentence = 'PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).';
const isDigit = (char) => !isNaN(char) && char !== ' ';
const countNumericCharacters = R.pipe(
  R.split(''),            
  R.filter(isDigit),       
  R.length                 
);
const result = countNumericChars(sentence);
console.log(result);  
