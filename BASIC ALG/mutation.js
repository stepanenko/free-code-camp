
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

console.log(mutation(["hello", "hel"]));
