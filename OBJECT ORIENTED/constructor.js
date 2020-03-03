
function Animal() {}
function Bird() {}
function Dog() {}
function Cat() {}

Dog.prototype = Object.create(Animal.prototype);
Cat.prototype = Object.create(Animal.prototype);
Bird.prototype = Object.create(Animal.prototype);

const cat = new Cat('Dodo');
console.log(cat.constructor); // [Function: Animal]

Dog.prototype.constructor = Dog;
Bird.prototype.constructor = Bird;

const dog = new Dog('Jack');
const bird = new Bird('Mmii');

console.log(dog.constructor); // [Function: Dog]
console.log(bird.constructor); // [Function: Bird]
