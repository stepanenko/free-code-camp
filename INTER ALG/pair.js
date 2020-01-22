
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


let result = pairElement("ATCGA");
console.log(result);
