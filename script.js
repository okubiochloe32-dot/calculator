const equationDisplay = document.querySelector("#equationDisplay");
const solutionDisplay = document.querySelector("#solutionDisplay");
const clearAll = document.querySelector("#clearAll");
const percentage = document.querySelector("#percentage");
const superscript = document.querySelector("#superscript");
const nine = document.querySelector("#numNine");
const eight = document.querySelector("#numEight");
const seven = document.querySelector("#numSeven");
const six = document.querySelector("#numSix");
const five = document.querySelector("#numFive");
const four = document.querySelector("#numFour");
const three = document.querySelector("#numThree");
const two = document.querySelector("#numTwo");
const one = document.querySelector("#numOne");
const zero = document.querySelector("#numZero");
const division = document.querySelector("#division");
const multiplication = document.querySelector("#multiplication");
const addition = document.querySelector("#addition");
const subtraction = document.querySelector("#subtraction");
const remove = document.querySelector("#remove");
const dot = document.querySelector("#dot");
const equal = document.querySelector("#equal");
const clickSound = document.querySelector("#clickSound");

let emptyArray = [];

function addValueToScreen(value) {
  emptyArray.push(value);
  equationDisplay.innerHTML = emptyArray.join("");
}

function calculateResult() {
  const arrayConvertedToString = emptyArray.join("");
  const result = eval(arrayConvertedToString);
  solutionDisplay.innerHTML = result;
}

function clearScreen() {
  emptyArray = [];
  equationDisplay.innerHTML = 0;
  solutionDisplay.innerHTML = 0;
}

function deleteValue() {
  emptyArray.pop();
  equationDisplay.innerHTML = emptyArray.join("");
}

document.addEventListener("DOMContentLoaded", () => {
  nine.addEventListener("click", () => addValueToScreen(9));
  eight.addEventListener("click", () => addValueToScreen(8));
  seven.addEventListener("click", () => addValueToScreen(7));
  six.addEventListener("click", () => addValueToScreen(6));
  five.addEventListener("click", () => addValueToScreen(5));
  four.addEventListener("click", () => addValueToScreen(4));
  three.addEventListener("click", () => addValueToScreen(3));
  two.addEventListener("click", () => addValueToScreen(2));
  one.addEventListener("click", () => addValueToScreen(1));
  zero.addEventListener("click", () => addValueToScreen(0));
  division.addEventListener("click", () => addValueToScreen("/"));
  multiplication.addEventListener("click", () => addValueToScreen("*"));
  addition.addEventListener("click", () => addValueToScreen("+"));
  subtraction.addEventListener("click", () => addValueToScreen("-"));
  percentage.addEventListener("click", () => addValueToScreen("%"));
  superscript.addEventListener("click", () => addValueToScreen("**"));
  dot.addEventListener("click", () => addValueToScreen("."));
  clearAll.addEventListener("click", () => clearScreen());
  remove.addEventListener("click", () => deleteValue());
  equal.addEventListener("click", () => calculateResult());
});
