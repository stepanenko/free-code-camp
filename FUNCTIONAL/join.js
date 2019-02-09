
// TASK: Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str. The function should return a string.

function sentensify(str) {
  return str.split(/\W/).join(' ');
}

console.log(sentensify("May-the-force-be-with-you"));
