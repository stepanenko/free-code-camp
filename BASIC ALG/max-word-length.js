// https://learn.freecodecamp.org
// Basic Algorithm Scripting: Find the Longest Word in a String

function findLongestWordLength(str) {
  str = str.split(' ');
  let array = [];
  array = str.map(a => a.length);
  return console.log(Math.max(...array));
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
