
// TASK: Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).

function myReplace(str, before, after) {
  if (before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);

    return str.replace(before, after);
  }
  else {
    return str.replace(before, after);
  }
}

// Given solution 1:
function myReplace1(str, before, after) {
  var index = str.indexOf(before);

  if (str[index] === str[index].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }

  str = str.replace(before, after);

  return str;
}

// Given solution 2:
function myReplace2(str, before, after) {
  var regex = new RegExp(before, "gi");

  if (/[A-Z]/.test(before[0])) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }

  var newStr = str.replace(regex, after);
  
  return newStr;
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

// Note: Preserve the case of the first character in the original word when you are replacing it.
// For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
