# Functional Programming Challenges

Functional programming is an approach to software development based around the evaluation of functions. Like mathematics, functions in programming map input to output to produce a result. **Functional programming is all about creating and using non-mutating functions.**

## Functional programming follows a few core principles:

- Functions are independent from the state of the program or global variables. They only depend on the arguments passed into them to make a calculation

- Functions try to limit any changes to the state of the program and avoid changes to the global objects holding data

- Functions have minimal side effects in the program


The functional programming software development approach breaks a program into small, testable parts. This section covers basic functional programming principles in JavaScript.

## Functional programming is about:

1) Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change

2) Pure functions - the same input always gives the same output

3) Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled

## Additional Info

Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called **first class functions**. In JavaScript, all functions are __first class functions__.

The functions that take a function as an argument, or return a function as a return value are called **higher order functions**.

When the functions are passed in to another function or returned from another function, then those functions which gets passed in or returned can be called a **lambda**.

## Even more info

One of the **core principle** of functional programming is to **not change things**. Changes lead to bugs. It's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable.

Recall that in functional programming, changing or altering things is called **mutation**, and the outcome is called a **side effect**. A function, ideally, should be a **pure function**, meaning that it does not cause any side effects.
```var arr = [1, 2, 3];
arr.push([4, 5, 6]);
// arr is changed to [1, 2, 3, [4, 5, 6]]
// Not the functional programming way```
