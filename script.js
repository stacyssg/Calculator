let numOne = "";
let numTwo = "";
let operator = "";
let finalNum = ""
let currentNumber = "numOne";
const operators = ["+", "-", "*", "/"];

function add(firstNum, secNum) {
  const finalNum = firstNum + secNum;
  return finalNum;
}
function subtract(firstNum, secNum) {
  const finalNum = firstNum - secNum;
  return finalNum;
}
function multiply(firstNum, secNum) {
  const finalNum = firstNum * secNum;
  return finalNum;
}
function divide(firstNum, secNum) {
  const finalNum = firstNum / secNum;
  return finalNum;
}
function clear() {
  display.innerHTML = "";
  numOne = "";
  numTwo = "";
  currentNumber = "numOne";
}
function operate(numOne, numTwo, operator) {    
  firstNum = numOne;
  secNum = numTwo;
  if (operator == "+") {
    finalNum = add(firstNum, secNum);
  } else if (operator == "-") {
    finalNum = subtract(firstNum, secNum);
  } else if (operator == "*") {
    finalNum = multiply(firstNum, secNum);
  } else if (operator == "/") {
    if (secNum == 0) {
      finalNum = "We dont divide by 0 :o";
    } else finalNum = divide(firstNum, secNum);
  }
  return finalNum;
}
function errors(result) {
  if (numOne == "" || numTwo == "") {
    display.innerHTML = "ERROR";
    return
  }
  if (finalNum == "We dont divide by 0 :o") {
    numOne = "";
    display.innerHTML = finalNum
    return
  }

  display.innerHTML = result;
    numOne = result;
}
//Until operation-button clicked, create the whole number
const nums = document.querySelector(".num-buttons");

nums.addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON") {
        return
    }
  if (currentNumber == "numOne") {
    numOne = numOne + event.target.textContent;
    display.innerHTML = numOne;
  } else {
    numTwo = numTwo + event.target.textContent;
    display.innerHTML = "";
    display.innerHTML = numTwo;
  }
});

const display = document.getElementById("display-text");
const equals = document.getElementById("equal");
const operation = document.querySelector(".operation-buttons");

equals.addEventListener("click", () => {
  const result = operate(Number(numOne), Number(numTwo), operator);
  errors(result)
  numTwo = "";
  operator = "";
  currentNumber = "numOne";
});

operation.addEventListener("click", (event) => {
  if (operators.includes(event.target.textContent)) {
    if (currentNumber == "numTwo") {
      const result = operate(Number(numOne), Number(numTwo), operator);
      errors(result)

      numTwo = "";
      operator = "";
    } else currentNumber = "numTwo";
    operator = event.target.textContent;
  }
});

const cleared = document.getElementById("clear");
cleared.addEventListener("click", () => {
  clear();
});
