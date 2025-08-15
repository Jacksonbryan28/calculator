let num1, num2, prevOperator, operator, currentInput, answer, operated;
//need to declare currentInput, or there is a undefined input
currentInput = "";
num1 = "";
num2 = "";
operator = "";
operated = false;

// //adds variable to button
//Selects all buttons in document
const buttons = document.querySelectorAll("button");
//links display in html
const display = document.getElementById("display");

//updates display text by adding button ID to string
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("button pressed");

    // display.textContent += button.id;

    currentInput += button.id;
    // currentInput = display.textContent;
    parseInput(currentInput);
  });
});

//read if input string is numbers or operators and stores variables accordingly
function parseInput(input) {
  console.log("*****************************");
  console.log("input at start of function: " + input);
  console.log("currentInput at start of function: " + currentInput);
  console.log("*****************************");
  if (
    num1 != "" &&
    num2 != "" &&
    operator == "=" &&
    isOperator(input) == false
  ) {
    console.log("----------");
    console.log("Cleared since = was the last operator and a number is hit");
    console.log("----------");
    clear();
  }
  //If numbers have value a operator has been used and the next input is an operator, num 1 is the calculation of the two current numbers
  if (num1 != "" && num2 != "" && operator != "" && isOperator(input)) {
    console.log("----------");
    console.log("USED PREV ANSWER AS NUM 1");
    console.log("----------");

    console.log("Answer in else if statment: " + answer);
    console.log("Operator: " + operator);
    console.log("prevOperator " + prevOperator);

    if (operator == "=") {
      display.textContent = operate(num1, prevOperator, num2);
      answer = operate(num1, prevOperator, num2);
      num1 = answer;
      operator = input.charAt(input.length - 1);
      currentInput = "";
    } else {
      display.textContent = operate(num1, operator, num2);
      answer = operate(num1, operator, num2);
      num1 = answer;
      console.log("num1 line 51: " + num1);
      num2 = "";
      prevOperator = operator;
    }
  }

  switch (input.charAt(input.length - 1)) {
    //If it has a operator in it, set that as the operator variable, and save the string as a number
    case "c":
      clear();
      break;
    case "+":
      operator = "+";
      currentInput = "";
      break;
    case "m":
      operator = "m";
      currentInput = "";
      console.log(operator);
      break;
    case "⋅":
      operator = "⋅";
      currentInput = "";
      // num1 = input.slice(0, input.length - 1);
      console.log(operator);
      break;
    case "÷":
      operator = "÷";
      currentInput = "";
      console.log(operator);
      break;
    //If the operator is = then execute the operate function with the variables as inputs
    case "=":
      //stores the value of what operation to call by saving the operator
      prevOperator = operator;
      operator = "=";

      currentInput = "";

      //checks that num 1 and operator have values. If they do, save currentInput to num2 and run operate
      if (num1 != "" && operator != "" && num2 != "") {
        console.log("num 1 : " + num1);
        console.log("num 2 : " + num2);
        console.log("operator : " + operator);

        display.textContent = operate(num1, prevOperator, num2);
        answer = operate(num1, prevOperator, num2);
        console.log("answer variable: " + answer);
      } else {
        //if there are not 2 numbers and a operator, return error message in display and clear info (minus display)
        operator = "";
        console.log(
          "Please input two numbers and an operator before hitting '='."
        );
        display.textContent =
          "Please input two numbers and an operator before hitting '='.";
        num1 = "";
        operator = "";
        prevOperator = "";
        num2 = "";
        currentInput = "";
        answer = "";
        operated = false;
      }
      break;
    default:
      //if num1 and operator have values, num2 gets set to the current input
      console.log("default");
      if (num1 != "" && operator != "") {
        num2 = input;

        display.textContent = num2;
      }
      //if not, num 1 = input
      else {
        // console.log("number 1 added to");
        console.log("input before num 1 = input at 160: input: " + input);
        num1 = input;

        //this is the only place this is used to fix duplicate number bug. Maybe see if this should be handled somewhere else?
        currentInput = num1;

        console.log("num 1 in the default switch statement line 162: " + num1);

        display.textContent = num1;
      }
    //case default if its not operator save it as a number if a is empty then save as b
  }
  console.log("-----------------------");
  console.log("parseInput called");
  console.log("input: " + input);
  console.log("currentInput at end of function: " + currentInput);
  console.log("num1: " + num1);
  console.log("num2: " + num2);
  console.log("operator: " + operator);
  console.log("answer: " + answer);
  console.log("operated: " + operated);
  console.log("prevOperator: " + prevOperator);
  console.log("------------------------");
}

function isOperator(input) {
  let isOperator;
  switch (input.charAt(input.length - 1)) {
    case "+":
      isOperator = true;
      break;
    case "m":
      isOperator = true;
      break;
    case "⋅":
      isOperator = true;
      break;
    case "÷":
      isOperator = true;
      break;
    // case "=":
    //   isOperator = true;
    //   break;
    default:
      isOperator = false;
      break;
  }
  return isOperator;
}

function clear() {
  num1 = "";
  console.log("num1 in clear function line 212: " + num1);
  operator = "";
  prevOperator = "";
  num2 = "";
  currentInput = "";
  answer = "";
  operated = false;
  display.textContent = "";
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
  console.log("operate result in function: " + result);
  operated = true;
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

// testing isOperator function

// console.log(isOperator("+"));
// console.log(isOperator("m"));
// console.log(isOperator("⋅"));
// console.log(isOperator("÷"));
// console.log(isOperator("string ending with operator+"));
// console.log(isOperator("149294="));
// console.log(isOperator("24920"));
