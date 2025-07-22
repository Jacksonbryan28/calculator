let num1, num2, operator, currentInput;

// //adds variable to button
//Selects all buttons in document
const button = document.querySelectorAll("button");
//links display in html
const display = document.getElementById("display");

//updates display text by adding button ID to string
button.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("button pressed");
    display.textContent += button.id;
    currentInput = display.textContent;
    console.log(currentInput);
    parseInput(currentInput);
  });
});

//read if input string is numbers or operators and stores variables accordingly
function parseInput(input) {
  //check if string has any operators
  switch (input.charAt(input.length - 1)) {
    //If it has a operator in it, set that as the operator variable, and save the previous string
    case "+":
      operator = "+";
      console.log(operator);
      break;
    case "-":
      operator = "-";
      console.log(operator);
      break;
    case "⋅":
      operator = "⋅";
      console.log(operator);
      break;
    case "÷":
      operator = "÷";
      console.log(operator);
      break;
    //If the operator is = then execute the operate function with the variables as inputs
    case "=":
      operator = "=";
      console.log(operator);
      operate(num1, operator, num2);
      break;
  }
}

//takes the inputs and calls the correct math function to execute based on the operator
function operate(num1, operator, num2) {
  let result;
  //decide what function to call based on what operator is set to
  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "⋅":
      result = multiply(num1, num2);
      break;
    case "÷":
      result = divide(num1, num2);
      break;

    // //If the operator is = then execute the operate function with the variables as inputs
    // case "=":
    //   operator = "=";
    //   console.log(operator);
    //   operate(num1, operator, num2);
    //   break;
  }
  return result;
}

//operation functions
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

//test math functions

// console.log(add(23, 25));
// console.log(subtract(24, 10));
// console.log(multiply(5, 8));
// console.log(divide(100, 20));

console.log("---test operate function---");

console.log(operate(20, "+", 10));
console.log(operate(20, "-", 10));
console.log(operate(20, "⋅", 10));
console.log(operate(20, "÷", 10));
