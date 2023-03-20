// business logic
function add(number1, number2) {
  return number1 + number2;
}
function subtract(number1, number2) {
  return number1 - number2;
}
function multiply(number1, number2) {
  return number1 * number2;
}
function divide(number1, number2) {
  return number1 / number2;
}

// user interface logic
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

window.alert("the addition of your two numbers equals " + add(number1, number2));
window.alert("subtracting the second number from the first number equals " + subtract(number1, number2));
window.alert("the multiplication of your two numbers equals " + multiply(number1, number2));
window.alert("dividing your first number by your second number equals " + divide(number1, number2));
