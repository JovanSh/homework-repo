console.log("I am working");

let userInput = prompt("What year were you born in?");

let result = (userInput - 4) % 12;

switch (result) {
  case 0:
    console.log("You are a rat");
    break;
  case 1:
    console.log("You are an ox");
    break;
  case 2:
    console.log("You are a tiger");
    break;
  case 3:
    console.log("You are a rabbit");
    break;
  case 4:
    console.log("You are a dragon");
    break;
  case 5:
    console.log("You are a snake");
    break;
  case 6:
    console.log("You are a horse");
    break;
  case 7:
    console.log("You are a goat");
    break;
  case 8:
    console.log("You are a monkey");
    break;
  case 9:
    console.log("You are a rooster");
    break;
  case 10:
    console.log("You are a dog");
    break;
  case 11:
    console.log("You are a pig");
  default:
    console.log("Invalid Input");
}
