
// The simplest way to make properties private is by creating a variable within the constructor function. This changes the scope of that variable to be within the constructor function versus available globally. This way, the property can only be accessed and changed by methods also within the constructor function.

function Bird2() {
  const legs = 2;

  this.getLegsCount = function() {
    return console.log(`Legs count: ${legs}`);
  }
}

let bird = new Bird2();
bird.getLegsCount();
// Here getLegsCount is a privileged method, because it has access to the private variable legs. This is possible because legs is declared in the same context as getLegsCount. In JavaScript, a function always has access to the context in which it was created. This is called CLOSURE.

// TASK: Change how weight is declared in the Bird function so it is a private variable. Then, create a method getWeight that returns the value of weight.
function Bird() {
  const weight = 15;
  
  this.getWeight = function() {
    return weight;
  }
}

const sparrow = new Bird();
console.log(sparrow.getWeight());
