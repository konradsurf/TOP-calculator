let firstOperatorEntry = true;
let enteredNumber = 52;
let subTotal = 43;
let enteredOperator = 'multiply';
let priorOperator = 'add';

/*this should just run the operation using pre-populated variable
values for now regardless of which operator button is pressed */
const opBtns = document.querySelectorAll('.operatorBtn');
  opBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      subTotal = operate(priorOperator, subTotal, enteredNumber);
      document.querySelector('.display').textContent = subTotal;  
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