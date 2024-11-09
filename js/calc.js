document.addEventListener('DOMContentLoaded', function() {
  const display = document.getElementById('display');
  const buttons = Array.from(document.getElementsByClassName('btn'));
  let currentInput = '';
  let operator = null;
  let previousInput = '';

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const value = this.getAttribute('data-value');

      if (value === 'C') {
        currentInput = '';
        previousInput = '';
        operator = null;
        display.textContent = '0';
        return;
      }

      if (value === '=') {
        if (operator && previousInput !== '') {
          currentInput = eval(`${previousInput}${operator}${currentInput}`);
          display.textContent = currentInput;
          operator = null;
          previousInput = '';
        }
        return;
      }

      if (['+', '-', '*', '/'].includes(value)) {
        operator = value;
        previousInput = currentInput;
        currentInput = '';
        return;
      }

      currentInput += value;
      display.textContent = currentInput;
    });
  });
});
