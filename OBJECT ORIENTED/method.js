
// A constructor function that inherits its prototype object from a supertype constructor function can still have its own methods in addition to inherited methods.

function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  console.log("Woof!")
};

let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"
