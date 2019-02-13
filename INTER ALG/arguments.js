
// TASK: You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments. You have to use the arguments object.

function destroyer(arr) {
  var args = [...arguments].slice(1);

  var i = 0;
  while (arr.includes(args[i])) {
    arr.splice(arr.indexOf(args[i]), 1);
    i++;
  }
  console.log(arr);

  // arr.forEach(el => {
  //   if (el === args[0] || el === args[1]) {
  //     // console.log('ok')
  //     arr.splice(arr.indexOf(el), 1);
  //   }
  // });
  // console.log(arr);
  // return arr.filter(el => );
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
