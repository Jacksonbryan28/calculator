let num1, num2, prevOperator, operator, currentInput;

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
    // console.log(currentInput);
    parseInput(currentInput);
  });
});

//read if input string is numbers or operators and stores variables accordingly
function parseInput(input) {
  //check if string has any operators
  switch (input.charAt(input.length - 1)) {
    //If it has a operator in it, set that as the operator variable, and save the previous string
    case "c":
      num1 = "";
      operator = "";
      prevOperator = "";
      num2 = "";
      display.textContent = "";
    case "+":
      operator = "+";
      num1 = input.slice(0, input.length - 1);
      currentInput = "";
      display.textContent = "";
      break;
    case "m":
      operator = "m";
      num1 = input.slice(0, input.length - 1);
      currentInput = "";
      display.textContent = "";
      console.log(operator);
      break;
    case "⋅":
      operator = "⋅";
      num1 = input.slice(0, input.length - 1);
      currentInput = "";
      display.textContent = "";
      console.log(operator);
      break;
    case "÷":
      operator = "÷";
      num1 = input.slice(0, input.length - 1);
      currentInput = "";
      display.textContent = "";
      console.log(operator);
      break;
    //If the operator is = then execute the operate function with the variables as inputs
    case "=":
      //stores the value of what function to call by saving the operator
      prevOperator = operator;
      operator = "=";
      // console.log(operator);
      //checks that num 1 and operator have values. If they do, save currentInput to num2 and run operate
      if (num1 != "" && operator != "") {
        num2 = input.slice(0, input.length - 1);
        // num2 = display.textContent;
        // console.log("num2: " + num2);
        // console.log("num 1 typeof: " + typeof num1);
        // console.log("num 2 typeof: " + typeof num2);
        // console.log("operator typeof: " + typeof operator);

        console.log("num 1 : " + num1);
        console.log("num 2 : " + num2);
        console.log("operator : " + operator);
        display.textContent = operate(num1, prevOperator, num2);
      }
      break;
  }
}

//takes the inputs and calls the correct math function to execute based on the operator
function operate(a, operator, b) {
  let result;
  console.log(operator);
  //decide what function to call based on what operator is set to
  switch (operator) {
    case "+":
      result = add(a, b);
      break;
    case "m":
      result = subtract(a, b);
      break;
    case "⋅":
      result = multiply(a, b);
      break;
    case "÷":
      result = divide(a, b);
      break;
  }
  console.log(result);
  return result;
}

//operation functions
function add(a, b) {
  return parseInt(a) + parseInt(b);
}
function subtract(a, b) {
  return parseInt(a) - parseInt(b);
}
function multiply(a, b) {
  console.log(a);
  console.log(b);
  return parseInt(a) * parseInt(b);
}
function divide(a, b) {
  return parseInt(a) / parseInt(b);
}

//test math functions

// console.log(add(23, 25));
// console.log(subtract(24, 10));
// console.log(multiply(5, 8));
// console.log(divide(100, 20));

// console.log("---test operate function---");

// console.log(operate(20, "+", 10));
// console.log(operate(20, "-", 10));
// console.log(operate(20, "⋅", 10));
// console.log(operate(20, "÷", 10));
