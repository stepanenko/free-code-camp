
// TASK: Take each character, get its pair, and return the results as a 2d array. Base pairs are a pair of AT and CG. Match the missing element to the provided character. Return the provided character as the first element in each array.

// My solution:
function pairElement(str) {
  return str.split('').map(e => {
    if (e === 'A') return [e, 'T'];
    if (e === 'T') return [e, 'A'];
    if (e === 'C') return [e, 'G'];
    if (e === 'G') return [e, 'C'];
  });
}

// My solution 2:
function pairElement2(str) {
  const newArr = [];
  for (let e of str) {
    if (e === 'A') {
      newArr.push([e, 'T'])
    } else if (e === 'T') {
      newArr.push([e, 'A'])
    } else if (e === 'C') {
      newArr.push([e, 'G'])
    } else {
      newArr.push([e, 'C']);
    }
  }
  return newArr;
}

let result = pairElement2("ATCGA");
console.log(result);
