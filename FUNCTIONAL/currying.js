
// The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1. It restructures a function so it takes one argument, then returns another function that takes the next argument, and so on:
// Un-curried function
function unCurried(x, y) {
  return x + y;
}
// Curried function
function curried(x) {
  return function(y) {
    return x + y;
  }
}
curried(1)(2) // Returns 3

// This is useful in your program if you can't supply all the arguments to a function at one time. You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available. Here's an example using the curried function in the example above:

// Call a curried function in parts:
var funcForY = curried(1);
console.log(funcForY(2)); // Prints 3

// TASK: Fill in the body of the add function so it uses currying to add parameters x, y, and z.

function add(x) {
  return function forY(y) {
    return function forZ(z) {
      return x + y + z;
    }
  }
}
console.log(add(10)(20)(30));

var forY = add(1);
var forZ = forY(2);
console.log(forZ(3)); // 6
