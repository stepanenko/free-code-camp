
// For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions.
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};

// The flyMixin takes any object and gives it the fly method.
let bird2 = {
  name: "Donald",
  numLegs: 2
};

let plane2 = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird2);
flyMixin(plane2);

// Here bird and plane are passed into flyMixin, which then assigns the fly function to each object. Now bird2 and plane2 can both fly:
bird2.fly(); // prints "Flying, wooosh!"
plane2.fly(); // prints "Flying, wooosh!"

// TASK: Create a mixin named glideMixin that defines a method named glide. Then use the glideMixin to give both bird and boat the ability to glide.
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Add your code below this line
const glideMixin = function(obj) {
  obj.glide = function() {
    console.log("Gliding...");
  }
}

glideMixin(bird);
glideMixin(boat);

bird.glide();
boat.glide();
