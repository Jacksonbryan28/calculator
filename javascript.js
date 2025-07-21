let num1, num2, operator;

// //adds variable to button
// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   gridDensity = prompt("Enter a number between 1-100");
//   if (gridDensity > 0 && gridDensity <= 100) {
//     console.log(gridDensity);
//     resizeGrid(gridDensity);
//   }
// });

//Selects all buttons in document
const button = document.querySelectorAll("button");
//links display in html
const display = document.getElementById("display");

//updates display text by adding button ID to string
button.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("button pressed");
    display.textContent += button.id;
  });
});

function operate(num1, operator, num2) {
  return add(num1, num2);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

//test
console.log(add(23, 25));
console.log(subtract(24, 10));
console.log(multiply(5, 8));
console.log(divide(100, 20));

console.log("------");
console.log(operate(3, "+", 10));
