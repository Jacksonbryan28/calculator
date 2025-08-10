let num1, num2, prevOperator, operator, currentInput, answer, operated;
//need to declare currentInput, or there is a undefined input
currentInput = "";
num1 = "";
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
  if (operated == true) {
    console.log("Answer in operated = " + answer);
    num1 = answer;
    num2 = "";
    operated = false;
  }
  switch (input.charAt(input.length - 1)) {
    //If it has a operator in it, set that as the operator variable, and save the previous string

    //make new function to evaluate if you have valid a and b operator, set to current display
    //a and b are stored correctly
    //whenver you add a 3rd one set current one to a and then current evaluation becomes b
    case "c":
      clear();
      break;
    case "+":
      operator = "+";
      currentInput = "";
      // splitFirstNumber(input);
      break;
    case "m":
      operator = "m";
      currentInput = "";
      // splitFirstNumber(input);
      console.log(operator);
      break;
    case "⋅":
      operator = "⋅";
      currentInput = "";
      // num1 = input.slice(0, input.length - 1);
      // splitFirstNumber(input);
      console.log(operator);
      break;
    case "÷":
      operator = "÷";
      currentInput = "";
      // splitFirstNumber(input);
      console.log(operator);
      break;
    //If the operator is = then execute the operate function with the variables as inputs
    case "=":
      //stores the value of what function to call by saving the operator
      prevOperator = operator;
      operator = "=";
      currentInput = "";
      // console.log(operator);
      //checks that num 1 and operator have values. If they do, save currentInput to num2 and run operate
      if (num1 != "" && operator != "") {
        // num2 = input.slice(0, input.length - 1);

        // num2 = display.textContent;
        // console.log("num2: " + num2);
        // console.log("num 1 typeof: " + typeof num1);
        // console.log("num 2 typeof: " + typeof num2);
        // console.log("operator typeof: " + typeof operator);

        console.log("num 1 : " + num1);
        console.log("num 2 : " + num2);
        console.log("operator : " + operator);
        display.textContent = operate(num1, prevOperator, num2);
        answer = operate(num1, prevOperator, num2);
        console.log("answer variable: " + answer);
      } else {
        console.log(
          "Please input two numbers and an operator before hitting '='."
        );
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
        num1 = input;

        display.textContent = num1;
      }
    //case default if its not operator save it as a number if a is empty then save as b
  }
  console.log("---parseInput called---");
  console.log("num1: " + num1);
  console.log("num2: " + num2);
  console.log("operator: " + operator);
  console.log("answer: " + answer);
  console.log("operated: " + operated);
  console.log("prevOperator: " + prevOperator);
  console.log("------------------------");
}

function splitFirstNumber(input) {
  num1 = input.slice(0, input.length - 1);
  // currentInput = "";
  // display.textContent = "";
}

function clear() {
  num1 = "";
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
