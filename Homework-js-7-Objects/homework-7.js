console.log("Hello World!");

/*
CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
name
kind
speak (method)
this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console
“Dog says: ‘Hey bro!!!’”
Bonus: enter the values from prompt or from HTML inputs
*/

const animal = {
  name: "Jiminy Cricket",
  kind: "cricket",

  speak: function (textInput) {
    console.log(`${this.name} says ${textInput}`);
  },
};

const userInput = prompt("Please enter a word");
animal.speak(userInput);
animal.speak("'Maybe you and I better have a little heart-to-heart talk'");

/*
Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.

Already read 'The Robots of dawn' by Isaac Asimov. (if true)
You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML
*/

function Book(title, author, readingStatus) {
  this.title = title;
  this.author = author;
  this.readingStatus = readingStatus;

  this.info = function () {
    if (readingStatus === "yes") {
      console.log(`Already read '${title}' by ${author}.`);
    } else if (readingStatus === "no") {
      console.log(`You still need to read '${title}' by ${author}.`);
    } else {
      console.log("Invalid Input, please answer with yes or no");
    }
  };
}

const Inferno = new Book("Inferno", "Dante", "no");
console.log(Inferno);
Inferno.info();

const userInputOne = prompt("Please enter the title of the book");
const userInputTwo = prompt("Please enter the name of the author of the book");
const userInputThree = prompt("Have you read the book (yes/no)");
const bookInfo = new Book(userInputOne, userInputTwo, userInputThree);
console.log(bookInfo);
bookInfo.info();
