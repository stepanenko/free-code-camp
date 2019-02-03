
// TASK: Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You may use a for loop or the forEach method.

// Note: A pure function is allowed to alter local variables defined within its scope, although, it's preferable to avoid that as well.

var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  
  for (let i = 0; i < this.length; i++) {
    newArray = newArray.concat(callback(this[i]));
  }

  // given solution
  // this.forEach(a => newArray.push(callback(a)));

  return newArray;
};

var new_s = s.myMap(function(item){
  return item * 2;
});

console.log(new_s);
