
// TASK: Take each character, get its pair, and return the results as a 2d array. Base pairs are a pair of AT and CG. Match the missing element to the provided character. Return the provided character as the first element in each array.

// My solution 1:
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

// My solution 3:
function pairElement3(str) {
  let newArr = [];
  for (let e of str) {
    if (e === 'A') {
      newArr = [...newArr, [e, 'T']];
    } else if (e === 'T') {
      newArr = [...newArr, [e, 'A']];
    } else if (e === 'C') {
      newArr = [...newArr, [e, 'G']];
    } else {
      newArr = [...newArr, [e, 'C']];
    }
  }
  return newArr;
}

// My solution 4:
function pairElement4(str) {
  let newArr = [];
  for (let e of str) {
    newArr = e === 'A' ? [...newArr, [e, 'T']] :
             e === 'T' ? [...newArr, [e, 'A']] :
             e === 'C' ? [...newArr, [e, 'G']] :
                         [...newArr, [e, 'C']];
  }
  return newArr;
}

let result = pairElement4("ATCGA");
console.log(result);
