console.log("I am alive");

/*THE AGE CALCULATOR
Forgot how old you are? Calculate it!

Write a function named calculateAge that:
takes 2 arguments: birth year, current year.
calculates the age based on those years.
outputs the result to the screen like so: "You are NN years old"
Call the function three times with different sets of values.*/

function calculateAge(birthYear, currentYear) {
  let resultOne = currentYear - birthYear;
  let resultTwo = currentYear - birthYear;
  let resultThree = currentYear - birthYear;
  return resultOne, resultTwo, resultThree;
}

let resultOne = calculateAge(2002, 2023);

let resultTwo = calculateAge(1542, 2023);

let resultThree = calculateAge(1967, 2023);

console.log(`You are ${resultOne} years old`);
console.log(`You are ${resultTwo} years old`);
console.log(`You are ${resultThree} years old`);

/*Bonus: Figure out how to get the current year in JavaScript instead of passing it in.*/

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
console.log(currentYear);

/*HOMEWORK PART 1
Write a JavaScript function which accepts a parameter and returns its type and prints it in the console. Try to call the functions 5 times for 5 different types:*/

function typeOfFunction(numOne) {
  let type = typeof numOne;
  console.log(`The type of ${numOne} is ${type}`);
  return type;
}

typeOfFunction("Hello");
typeOfFunction(21);
typeOfFunction(true);
typeOfFunction();
typeOfFunction(null);

/*HOMEWORK PART 2
Write a JavaScript function that will return:

Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
Note: Call the function in console to see answer
Bonus: Make the same function work for converting dog to human years as well*/

/*function humanToDog(dog) {
  let result = dog * 7;
  return result;
}
function dogToHuman(human) {
  let result = human / 7;
  return result;
}

let personChoice = prompt("Enter D for dog years and H for human years");
let personInput = Number(prompt("Please enter value:"));
if (personChoice === "D") {
  console.log(`${dogToHuman(personInput)} Human year/s`);
} else if (personChoice === "H") {
  console.log(`${humanToDog(personInput)} Dog year/s`);
} else {
  console.log("Invalid Input");
}*/

function convertYears(age, species) {
  if (Number.isNaN(age)) {
    return "NaN";
  } else if (species === "dog") {
    return age * 7;
  } else if (species === "human") {
    return age / 7;
  } else {
    return "Invalid Input";
  }
}

console.log(convertYears(2, "dog"));
console.log(convertYears(14, "human"));

/*HOMEWORK PART 3
Write a javascript function for an ATM:
The ATM should give cash
Should return "Not enough money" if you request more money
Should return the amount withdrawn and money left on the account if you have enough
Note: Hardcode your account money in the program
Bonus: Make it work with prompt()!*/

/*let accountBalanceBefore = 10000;

let personChoice = Number(prompt("Enter money to withdraw"));
if (personChoice > 10000) {
  console.log("Not enough money");
} else {
  function atmMachine(personChoice) {
    let accountBalanceAfter = accountBalanceBefore - personChoice;
    console.log(personChoice);
    return accountBalanceAfter;
  }
}

console.log(atmMachine(personChoice));*/

let accountBalanceBefore = 10000;
let personChoice = Number(prompt("Enter money to withdraw"));

function atmMachine() {
  if (personChoice > 10000) {
    console.log("Not enough money");
  } else {
    let accountBalanceAfter = accountBalanceBefore - personChoice;
    console.log(personChoice);
    return accountBalanceAfter;
  }
}

console.log(atmMachine(personChoice));
