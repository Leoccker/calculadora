const display = document.getElementById('display');
const PAYWALL_MESSAGE = 'pague R$300';

let expression = '';
let showingPaywall = false;

function updateDisplay(text, isPaywall = false) {
  display.textContent = text;
  display.classList.toggle('paywall', isPaywall);
}

function appendValue(val) {
  if (showingPaywall) {
    expression = '';
    showingPaywall = false;
  }
  if (expression === '0' && val !== '.') {
    expression = val;
  } else {
    expression += val;
  }
  updateDisplay(expression || '0', false);
}

function clearDisplay() {
  expression = '';
  showingPaywall = false;
  updateDisplay('0', false);
}

function triggerPaywall() {
  // Regra central do meme: nunca calcula o resultado real, sempre cobra R$300
  showingPaywall = true;
  updateDisplay(PAYWALL_MESSAGE, true);
}

document.querySelectorAll('.btn').forEach((button) => {
  button.addEventListener('click', () => {
    const action = button.dataset.action;
    const value = button.dataset.value;

    if (action === 'clear') {
      clearDisplay();
    } else if (action === 'equal') {
      triggerPaywall();
    } else if (value !== undefined) {
      appendValue(value);
    }
  });
});

document.addEventListener('keydown', (event) => {
  const { key } = event;

  if (key === 'Enter' || key === '=') {
    event.preventDefault();
    triggerPaywall();
  } else if (key === 'Escape' || key === 'c' || key === 'C' || key === 'Backspace') {
    clearDisplay();
  } else if (/^[0-9+\-*/.]$/.test(key)) {
    appendValue(key);
  }
});
