
// Another principle of functional programming is to always declare your dependencies explicitly. This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.

// TASK: Let's update the incrementer function to clearly declare its dependencies. Write the incrementer function so it takes an argument, and then increases the value by one.

// the global variable
var fixedValue = 4;

function incrementer(data) {
  return data + 1;
}

var newValue = incrementer(fixedValue); // Should equal 5
console.log(fixedValue); // Should print 4
