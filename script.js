function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function clearDisplay() {
  display.value = '';
}
function displayResult(result) {
  display.value = result;
}
function resetVariables() {
  num1 = '';
  num2 = '';
  operator = '';
  prevNum = '';
  result = 0;
}

function operate(operator, a, b) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      if (b == 0) {
        alert('Division by 0!');
        return 'error';
      }else{
        return divide(a, b);
      }
  }
}

const buttons = document.querySelectorAll('.buttons input');
const display = document.querySelector('.display input');

let prevNum = '';
let num1 = '';
let num2 = '';
let operator = '';
let result = 0;
buttons.forEach(button => {
  button.addEventListener('click', function() {
    switch (button.value) {
      case 'AC':
        resetVariables();
        clearDisplay();
        break;
      case 'DE':
        clearDisplay();
        break;
      case '+':
        num1 = display.value;
        operator = '+';
        clearDisplay();
        break;
      case '-':
        num1 = display.value;
        operator = '-';
        clearDisplay();
        break;
      case '*':
        num1 = display.value;
        operator = '*';
        clearDisplay();
        break;
      case '/':
        num1 = display.value;
        operator = '/';
        clearDisplay();
        break;
      case '=':
        if (prevNum === '') {
          num2 = display.value;
        } else {
          num2 = prevNum;
        }
        result = operate(operator, parseFloat(num1), parseFloat(num2));
        if (result != 'error') {
          displayResult(result);
          num1 = result
          prevNum = num2;
        }else {
          resetVariables();
          clearDisplay();
        }
        break;
      default:
        display.value += button.value;
        break;
    }
  });
});

