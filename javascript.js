let displayValue = 0;


const btns = document.querySelectorAll('.numberBtn');
console.log(btns);
btns.forEach(btn => {
    btn.addEventListener('click', () => { 
    if (displayValue == 0) {
      displayValue = btn.textContent;}
    else {
      displayValue += btn.textContent;}
    document.querySelector('.display').textContent = displayValue;
  });
});

