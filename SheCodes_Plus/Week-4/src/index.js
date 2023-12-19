// Challenge 1
// Log li with id special
let special = document.querySelector("#special");
console.log(special);

// Challenge 2
// Log all li with class of country
console.log(document.querySelectorAll(".country"));

// Challenge 3
// Add class special to the li with id special
// https://stackoverflow.com/questions/507138/how-to-add-a-class-to-a-given-element

let addClass = document.querySelector("#special");
addClass.classList.add("special");

// Challenge 4
// In your code, replace the content of the element with id special
// by your favorite country (other than Portugal of course)

let myContent = document.querySelector("#special");

myContent.innerHTML = "Madagascar";
