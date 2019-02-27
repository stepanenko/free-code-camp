
// TASK: take the first consonant of a word, move it to the end and suffixe an "ay". If a word begins with a vowel you just add "way" to the end.

// My solution 1:
function translatePigLatin(str) {
  var index = str.search(/a|e|o|i|u/);

  if (index > 0 ) {
    return str.slice(index) + str.slice(0, index) + 'ay';
  } else if (index === 0) {
    return str + 'way';
  } else {
    return str + 'ay';
  }
}

// Given solution 1:
function translatePigLatin2(str) {
  var pigLatin = '';
  var regex = /[aeiou]/gi;

  if (str[0].match(regex)) {
    pigLatin = str + 'way';
  } else if (str.match(regex) === null) {
    pigLatin = str + 'ay';
  } else {
    var index = str.indexOf(str.match(regex)[0]);
    pigLatin = str.substr(index) + str.substr(0, index) + 'ay';
  }

  return pigLatin;
}

console.log(translatePigLatin2("glove"));
