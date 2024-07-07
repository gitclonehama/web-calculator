const buttons = document.querySelectorAll('.buttons input');
const display = document.querySelector('.display input');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    display.value += this.value;
  });
});

