
// TASK: take the first consonant of a word, move it to the end and suffixe an "ay". If a word begins with a vowel you just add "way" to the end.

// My solution 1:
function translatePigLatin(str) {
  var index = str.search(/a|e|o|i|u/);

  if (index > 0 ) {
    return str.slice(index) + str.slice(0, index) + 'ay';
  } else if (index === 0) {
    return str + 'way';
  } else return str + 'ay';
}

// My solution 2 with a hint 'substr()'


console.log(translatePigLatin("glove"));
