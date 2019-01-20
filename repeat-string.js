
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  let st = '';
  if (num >= 0) {
    for (let i = 0; i < num; i++) {
      st = st + str;
    }
  }
  return st;
  // return num > 0 ? str.repeat(num) : ''; // given solution
}

console.log(repeatStringNumTimes("abc", 3));
