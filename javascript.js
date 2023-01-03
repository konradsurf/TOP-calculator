let firstOperatorEntry = true;
let enteredNumber = null;
let subTotal = null;
let enteredOperator = null;
let priorOperator = null;
let display = document.querySelector(".display");

/* Allow chaining of operations (operate on more than two numbers) */
const opBtns = document.querySelectorAll(".operatorBtn");
opBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // may be able to replace firstOperatorEntry with test for subTotal == null
    if (firstOperatorEntry == true) {  
      priorOperator = btn.id;
      subTotal = enteredNumber;
      enteredNumber = null;
      firstOperatorEntry = false;
    } else {
      subTotal = operate(priorOperator, subTotal, enteredNumber);
      document.querySelector(".display").textContent = subTotal;
      enteredNumber = null;
      priorOperator = btn.id;
    }
    console.log("priorOperator:" + priorOperator);
  });
});

const numBtns = document.querySelectorAll(".numberBtn");
numBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // if nothing in entered number then assign else concatenate
    if (enteredNumber == null) {
      enteredNumber = btn.textContent;
      enteredNumber = Number(enteredNumber);
      display.textContent = enteredNumber;
    } else {
      enteredNumber += btn.textContent;
      enteredNumber = Number(enteredNumber);
      display.textContent = enteredNumber;
    }
    console.log(typeof(enteredNumber));
  });
});

function operate(operator, a, b) {
  switch (operator) {
    case "divide":
      return divide(a, b);
    case "multiply":
      return multiply(a, b);
    case "add":
      return add(a, b);
    case "subtract":
      return subtract(a, b);
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}
