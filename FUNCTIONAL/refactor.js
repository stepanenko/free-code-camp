
// So far, we have seen two distinct principles for functional programming:
// 1) Don't alter a variable or object - create new variables and objects and return them if need be from a function.
// 2) Declare function arguments - any computation inside a function depends only on the arguments, and not on any global object or variable.

// TASK: Refactor (rewrite) the code so the global array bookList is not changed inside either function. The add function should add the given bookName to the end of an array. The remove function should remove the given bookName from an array. Both functions should return an array, and any new parameters should be added before the bookName one.

// the global variable
const bookList = ["1", "2", "3", "4"];

function add(arr, bookName) {
  let newArr = [...arr];

  newArr.push(bookName);

  return newArr;
}

function remove(arr, bookName) {
  let newArr = [...arr];

  if (newArr.indexOf(bookName) >= 0) {
    newArr.splice(newArr.indexOf(bookName), 1);
  }

  return newArr;
}


// Given solution
function add2(arr, book) {
  return [...arr, book];
}

function remove2(arr, book) {
  if (arr.indexOf(book) > -1) {
    return arr.filter(v => v !== book);
  }
  return 'No such book'
}

let newBookList = add2(bookList, '0');
let newerBookList = remove2(bookList, '3');
let newestBookList = remove2(add(bookList, '6'), '1');

console.log(bookList);
console.log(newBookList);
console.log(newerBookList);
console.log(newestBookList);
