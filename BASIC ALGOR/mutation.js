
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

function mutation(arr) {
  let result;
  for (let i = 0; i < arr[1].length; i++) {
    if (arr[0].toLowerCase().includes(arr[1][i].toLowerCase())) {
      result = true;
    } else return false;
  }
  return result;
}
// console.log(mutation(["hello", "hel"]));


// Solution with indexOf:
function asd(arr) {
  // let result;
  for (let i = 0; i < arr[1].length; i++) {
    if (arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) === -1) {
      return false;
    }
  }
  return true;
}
// console.log(asd(["hello", "hey"]));


// Given solution with .every()
function mutation2(arr) {
  return arr[1].toLowerCase()
    .split('')
    .every(letter => arr[0].toLowerCase().indexOf(letter) != -1);
}
console.log(mutation2(["hello", "HELL"]));

