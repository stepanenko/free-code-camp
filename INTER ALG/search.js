
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

// Given solution 3:
function myReplace3(str, before, after) {
  function applyCasing(source, target) {
    var targetArr = target.split('');
    var sourceArr = source.split('');

    for (let i = 0; i < Math.min(targetArr.length, sourceArr.length); i++) {
      if (/[A-Z]/.test(sourceArr[i])) {
        targetArr[i] = targetArr[i].toUpperCase();
      }
      else targetArr[i] = targetArr[i].toLowerCase();
    }

    return (targetArr.join(''));
  }

  return str.replace(before, applyCasing(before, after));
}
console.log(myReplace3("His name is TOm", "TOm", "john"));

// Given solution 4:
// Add new method to the String object, not overriding it if one exists already
String.prototype.capitalize = String.prototype.capitalize ||
  function() {
    return this[0].toUpperCase() + this.slice(1);
  };

const Util = (function () {
// Create utility module to hold helper functions
  function textCase(str, tCase) {
    // Depending if the tCase argument is passed we either 
    // set the case of the given string or we get it.

    if (tCase) {
      return setCase(str, tCase);
    } 
    else {
      return getCase(str);
    }

    function setCase(str, tCase) {
      switch (tCase) {
        case "uppercase": return str.toUpperCase();
        case "lowercase": return str.toLowerCase();
        case "capitalized": return str.capitalize();
        default: return str;
      }
    }

    function getCase(str) {
      if (str === str.toUpperCase()) { return "uppercase"; }
      if (str === str.toLowerCase()) { return "lowercase"; }
      if (str === str.capitalize()) { return "capitalized"; }
      return "normal";
    }
  }

  return { textCase };
})();

function myReplace4(str, before, after) {
  const { textCase } = Util;
  const regex = new RegExp(before, 'gi');
  const replacingStr = textCase(after, textCase(before));

  return str.replace(regex, replacingStr);
}

console.log(myReplace4("His name is TOM", "TOM", "john"));


// Note: Preserve the case of the first character in the original word when you are replacing it.
// For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
