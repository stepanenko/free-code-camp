
// Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called first class functions. In JavaScript, all functions are first class functions.

// The functions that take a function as an argument, or return a function as a return value are called higher order functions.

// When the functions are passed in to another function or returned from another function, then those functions which gets passed in or returned can be called a lambda

// TASK: Prepare 27 cups of green tea and 13 cups of black tea and store them in tea4GreenTeamFCC and tea4BlackTeamFCC variables, respectively. Note that the getTea function has been modified so it now takes a function as the first argument.

const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);
