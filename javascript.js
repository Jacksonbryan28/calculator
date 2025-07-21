let num1, num2, operator;

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
