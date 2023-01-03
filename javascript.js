let firstOperatorEntry = true;
let enteredNumber = null;
let subTotal = 43;
let enteredOperator = 'multiply';
let priorOperator = 'add';
let display = document.querySelector('.display');

const opBtns = document.querySelectorAll('.operatorBtn');
opBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    subTotal = operate(btn.id, subTotal, enteredNumber);
    document.querySelector('.display').textContent = subTotal;  
  })
});  


const numBtns = document.querySelectorAll('.numberBtn');
numBtns.forEach(btn => {
  btn.addEventListener('click', () => { 
    if (enteredNumber == null) {
      enteredNumber = btn.textContent;
      display.textContent = enteredNumber;
    }
    else {
      enteredNumber += btn.textContent;
      display.textContent = enteredNumber;
    }
  })
});





function operate(operator, a, b) {
  switch(operator) {
    case 'divide':
      return divide(a, b);
    case 'multiply':
      return multiply(a,b);
    case 'add':
      return add(a, b);
    case 'subtract':
      return subtract(a, b);
  };
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