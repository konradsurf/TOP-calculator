let displayValue = 0;
let subTotal;
let firstEntry = true;
enterNumbers();
enterOperator();
clearAll();




// FUNCTIONS
function operate(a, b, operator) {
  switch(operator) {
    case 'divide':
      document.querySelector('.display').textContent = divide(a, b);
      break;
    case 'multiply':
      document.querySelector('.display').textContent = multiply(a, b);
      break;
    case 'add':
      document.querySelector('.display').textContent = add(a, b);
      break;
    case 'subtract':
      document.querySelector('.display').textContent = subtract(a, b);
      break;
  };
  return;
}

function enterNumbers() {
  const btns = document.querySelectorAll('.numberBtn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => { 
    if (displayValue == 0) {
      displayValue = btn.textContent;}
    else {
      displayValue += btn.textContent;}
    document.querySelector('.display').textContent = displayValue;
    });
  });
}

function enterOperator() {
  const opBtns = document.querySelectorAll('.operatorBtn');
    opBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (firstEntry == true) {
          let subTotal = displayValue;
          //PLACEHOLDER FOR Y BELOW FOR TESTING
          let y = 2;
          operate(subTotal, y, btn.id);
          firstEntry = false;
        }
        else if (firstEntry == false) {

        }
        else {
          document.querySelector('.display').textContent = "Error with firstEntry flag";
        }
        
      });  
    });
  }

function clearAll() {
  const clearBtn = document.querySelector('#clear');
  clearBtn.addEventListener('click', () => {
    displayValue = 0;
    document.querySelector('.display').textContent = displayValue;
    subTotal = 0;
    firstEntry = true;
  });
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