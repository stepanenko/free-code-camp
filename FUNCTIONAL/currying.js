
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
