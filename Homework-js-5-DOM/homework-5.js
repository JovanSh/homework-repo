console.log("I am alive");

/*
Change the page with JavaScript

Change the text of all paragraphs and headers with javascript
Note:The html must not be changed
*/

const thirdDivEl = document.querySelector(".second-div").nextElementSibling;

console.log(thirdDivEl);

const mainHeadingEl = document.querySelector("#mainHeading");

console.log(mainHeadingEl);

mainHeadingEl.innerText = "Hurray!";

const firstParagraphEl = document.querySelector(".paragraph");

console.log(firstParagraphEl);

firstParagraphEl.innerText = "Yeah you're right it isn't :)";

const secondParagraphEl = document.querySelector(".second");

console.log(secondParagraphEl);

secondParagraphEl.innerText = "They are being selected as we speak";

const textEl = document.querySelector("text");

console.log(textEl);

textEl.innerText = "Yes, of course";

const thirdDivH1El = thirdDivEl.querySelector("h1");

console.log(thirdDivH1El);

thirdDivH1El.innerText = "I have changed";

const thirdDivH3El = document.querySelector("h3");

console.log(thirdDivH3El);

thirdDivH3El.innerText = "I will never be the same";

/*
Print all numbers from an array and the sum

Create an array with numbers
Print all numbers from the array in a list element, in a new HTML page
Print out the sum of all of the numbers below the list
Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)
*/

const secondHeaderEl = document.querySelector("h2");

console.log(secondHeaderEl);

let numArray = [2, 5, 7, 4];

secondHeaderEl.innerHTML = `<ul>
<li>2</li>
<li>5</li>
<li>7</li>
<li>4</li>
</ul>
<p>( 2 + 5 + 7 + 4 = 18)</p>`;
