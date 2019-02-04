
// Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You may use a for loop or the Array.prototype.forEach() method.

var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];

  // for (let i = 0; i < this.length; i++) {
  //   if (callback(this[i])) {
  //     newArray = [...newArray, this[i]]
  //   }
  // }

  // With forEach:
  this.forEach(n => {
    if (callback(n)) {
      newArray = newArray.concat(n);
      // newArray.push(n); // also works
    };
  });

  return newArray;
};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});

console.log(new_s);
