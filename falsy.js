
// Remove all falsy values from an array. Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
  arr = arr.filter(v => v);
  return arr;
}

console.log(bouncer([7, "ate", "", false, 9]));

// Given solution
function bouncer2(arr) {
  return arr.filter(Boolean);
}

console.log(bouncer2([7, "ate", "", false, 9]));
