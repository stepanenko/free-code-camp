
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

// ====  Given solution 1:  =====
function whatIsInAName1(collection, source) {
  var srcKeys = Object.keys(source);
  console.log(srcKeys);
  
  return collection.filter(obj => {
    for (let i = 0; i < srcKeys.length; i++) {
      if (!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}

// ====  Given solution 2:  =====
function whatIsInAName2(collection, source) {
  var srcKeys = Object.keys(source);

  return collection.filter(obj => srcKeys.every(key => obj[key] === source[key]));
}

// ====  Given solution 3:  =====
function whatIsInAName3(collection, source) {
  var srcKeys = Object.keys(source);

  // return collection.filter(obj => {
    return collection.map(o => {
      return o[srcKeys[0]] === source[srcKeys[0]]
    })
  // });
}

console.log(whatIsInAName3([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));
