console.log("i am working");

let userInput = prompt("How much money do you have?");

let userMoney = Number(userInput);

let isNumberInvalid = Number.isNaN(userMoney);

if (userInput === null) {
  console.log("Thanks for using our service!");
} else if (isNumberInvalid) {
  console.log("Invalid Input");
} else if (userMoney >= 40) {
  console.log("Go to dinner");
} else if (userMoney >= 20) {
  console.log("Buy a coffee");
} else {
  console.log("Stay at home");
}
