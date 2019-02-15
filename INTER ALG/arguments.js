
// TASK: You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments. You have to use the arguments object.

function destroyer(arr) {
  var args = [...arguments].slice(1);

  // arr.sort((a, b) => a - b);

  args.forEach(arg => {
    if (arr.includes(arg)) {
      arr.splice(arr.indexOf(arg), 1);
      console.log('deleted')
    }
  });

  console.log(arr);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
