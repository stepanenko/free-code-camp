
// Functional programming is a style of programming where solutions are simple, isolated functions, without any side effects outside of the function scope. 
// INPUT -> PROCESS -> OUTPUT

// TASK: Call the getTea function to get 40 cups of tea for the team, and store them in the tea4TeamFCC variable.

const prepareTea = () => 'greenTea';

const getTea = (numOfCups) => {
  const teaCups = [];
  
  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

const tea4TeamFCC = getTea(40);

console.log(tea4TeamFCC);
