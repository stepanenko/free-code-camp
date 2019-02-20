
// TASK: Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

function whatIsInAName(collection, source) {
  var arr = [];
  for (let i = 0; i < collection.length; i++) {
    var count = 0;
    for (let el in source) {
      if (collection[i][el] === source[el]) {
        count++;
      }
    }
    if (count === Object.keys(source).length) {
      arr.push(collection[i])
    }
  }
  console.log(arr);
  return arr;
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })
