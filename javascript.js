const btns = document.querySelectorAll('.numberBtn');
console.log(btns);
btns.forEach(btn => {
    btn.addEventListener('click', () => { 
    document.querySelector('.display').textContent = btn.textContent;
  });
});

