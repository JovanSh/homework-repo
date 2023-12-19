console.log("I am alive");

/*
HOMEWORK #1
Create a function called tellStory()

The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )

The function should return one big string with a story made from the arguments

Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.

The value that is returned from the function should be printed in the console or in alert
*/

function tellStory([name, mood, activity]) {
  return `Hi i am ${name}. Today i am feeling ${mood}. That's why i am going to be ${activity} today. Wish me luck!`;
}

console.log(tellStory(["Gregory", "tired", "sleeping"]));

/*
HOMEWORK #2
Write a function that will take an array of 5 numbers as an argument and return the sum.

Print it in the console or in alert
*/

function sumNumbers([numOne, numTwo, numThree, numFour, numfive]) {
  let total = numOne + numTwo + numThree + numFour + numfive;
  return `The result is ${total}`;
}

let sumResult = sumNumbers([1, 2, 3, 4, 5]);

console.log(sumResult);

/*
HOMEWORK #3
Write a javascript function that:
When given any array of strings (should work with array with any number of elements)
It will create one big string and return it
Ex:["Hello", "there", "students", "of", "SEDC", "!"]
Result: "Hello there students of SEDC !"
*/

function arrayOfStrings(array) {
  return array.join("");
}

console.log(arrayOfStrings(["I ", "am ", "a ", "gummy ", "bear"]));

// Neznaev kako da ja resam so momentalnoto znaenje, pa izguglav i ja resiv so join metodata, iako ne sme ja ucele

/*
HOMEWORK #4
Title: Looping structures

Description:Write a loop in javascript that goes from 1-20 that will print each number in the console 
and add "number is even" after every even number and add "number is odd" after every odd number
*/

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log("This number is even", i);
  } else {
    console.log("This number is odd", i);
  }
}

/*
HOMEWORK #5
Title: Looping structures

Description: Write a JavaScript function that will return:
The sum of the MAX and MIN numbers from an array with numbers
Ex: arr = [3, 5, 6, 8, 11]
Output: Max: 11, Min: 3, Sum: 14

Bonus: Try making the function work if there are other types of items in it
*/

let ranNumbers = [1, 16, 209, 5, 2222, 145, 890];

function sumOfMaxAndMinNumbers(numArrayOne, numArrayTwo) {
  let counter = 0;
  let max = numArrayOne[0];
  let min = numArrayTwo[0];

  while (counter < numArrayOne.length) {
    let currentNumber = numArrayOne[counter];
    if (currentNumber > max) max = currentNumber;

    counter++;
  }

  while (counter < numArrayTwo.length) {
    let currentNumber = numArrayTwo[counter];
    if (currentNumber > min) min = currentNumber;

    counter++;
  }

  let sum = max + min;

  console.log("Max:", max);
  console.log("Min:", min);
  console.log("Sum:", sum);

  // funkcijata raboti i bez return, dali ima potreba da se stava?
  return sum;
}

sumOfMaxAndMinNumbers(ranNumbers, ranNumbers);

/*
HOMEWORK #6
Title: Looping structures

Description:Write a javascript function that:
When given 2 arrays of students firstNames and lastNames will return a new array with students full names
Every name should have a numeric value before it
Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]
*/

let firstNames = ["Walter", "Jesse", "Gustavo", "Mike"];
let lastNames = ["White", "Pinkman", "Fring", "Ehrmantraut"];

function firstAndLastNames(firstNames, lastNames) {
  let combinedNames = [];

  for (let i = 0; i < Math.min(firstNames.length, lastNames.length); i++) {
    let fullNames = `${i + 1}. ${firstNames[firstNames.length - 1]} ${
      lastNames[lastNames.length - 1]
    }`;
    combinedNames.push(fullNames);
  }

  return combinedNames;
}

let result = firstAndLastNames(firstNames, lastNames);
console.log(result);
