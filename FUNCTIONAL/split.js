
// The split method splits a string into an array of strings. It takes an argument for the delimiter, which can be a character to use to break up the string or a regular expression. For example, if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, you get an array of each character in the string.

// TASK: Use the split method inside the splitify function to split str into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.

function splitify(str) {
  return str.split(/\W/);
}
console.log(splitify("Hello World,I-am code"));


// EXAMPLES:
var str = "Hello World";
var bySpace = str.split(" ");
// console.log(bySpace); // ["Hello", "World"]

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);
// console.log(byDigits); // ["How", "are", "you", "today"]

// Since strings are immutable, the split method makes it easier to work with them.
