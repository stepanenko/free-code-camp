
// TASK: take the first consonant of a word, move it to the end and suffixe an "ay". If a word begins with a vowel you just add "way" to the end.

// My solution:
function translatePigLatin(str) {
  var index = str.search(/a|e|o|i|u/);

  if (index > 0 ) {
    return str.slice(index) + str.slice(0, index) + 'ay';
  } else if (index === 0) {
    return str + 'way';
  } else return str + 'ay';
}

// Given solution 1:
function translatePigLatin2(str) {
  var pigLatin = '';
  var regex = /[aeiou]/gi;

  if (str[0].match(regex)) {
    pigLatin = str + 'way';
  }
  else if (str.match(regex) === null) {
    pigLatin = str + 'ay';
  }
  else {
    var vowelIndice = str.indexOf(str.match(regex)[0]);
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }

  return pigLatin;
}

// Given solution 2:
function translatePigLatin3(str) {
  function check(obj) {
    return ['a','i','u','e','o'].indexOf(str.charAt(obj)) == -1 ? check(obj + 1) : obj;
  }

  return str.substr(check(0)).concat((check(0) === 0 ? 'w' : str.substr(0, check(0))) + 'ay');
}

// Given solution 3:
function translatePigLatin4(str) {
  var strArr = [];
  var tmpChar;

  function isConsonant(char) {
    return !/[aeiou]/.test(char);
  }

  if (!isConsonant(str.charAt(0))) {
    return str + 'way';
  }
  else {
    strArr = str.split('');
  }

  while (isConsonant(strArr[0])) {
    tmpChar = strArr.shift();
    strArr.push(tmpChar);
  }
  
  return strArr.join('') + 'ay';
}

console.log(translatePigLatin4('glove'));
