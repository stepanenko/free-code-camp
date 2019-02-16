
// TASK: You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments. You have to use the arguments object.

function destroyer(arr) {
  var args = [...arguments].slice(1);

  args.forEach(arg => {
    //   newArr.push(arr.filter(el => el !== arg));
    console.log('forEach');
    while (arr.includes(arg)) {
      let index = arr.indexOf(arg);
      arr.splice(index, 1);
      console.log('while');
    }
  });
  console.log(arr);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
