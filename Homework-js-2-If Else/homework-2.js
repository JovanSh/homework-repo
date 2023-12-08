console.log("I am alive");

let userInput = prompt("What year were you born in?");

let result = (userInput - 4) % 12;

if (userInput === null) {
  console.log("Thanks for using our service!");
} else if (result === 0) {
  console.log("You are a rat");
} else if (result === 1) {
  console.log("You are an ox");
} else if (result === 2) {
  console.log("You are a tiger");
} else if (result === 3) {
  console.log("You are a rabbit");
} else if (result === 4) {
  console.log("You are a dragon");
} else if (result === 5) {
  console.log("You are a snake");
} else if (result === 6) {
  console.log("You are a horse");
} else if (result === 7) {
  console.log("You are a goat");
} else if (result === 8) {
  console.log("You are a monkey");
} else if (result === 9) {
  console.log("You are a rooster");
} else if (result === 10) {
  console.log("You are a dog");
} else if (result === 11) {
  console.log("You are a pig");
} else {
  console.log("Invalid Input");
}
