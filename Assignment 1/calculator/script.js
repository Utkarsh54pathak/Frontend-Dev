const display = document.getElementById('display');
let current = '0';
let previous = null;
let operator = null;
let waitingForNew = false;

// Update display
function updateDisplay() {
  display.textContent = current;
}

// Number buttons
function inputDigit(digit) {
  if (waitingForNew) {
    current = digit;
    waitingForNew = false;
  } else {
    current = current === '0' ? digit : current + digit;
  }
  updateDisplay();
}

// Decimal
function inputDecimal() {
  if (waitingForNew) {
    current = '0.';
    waitingForNew = false;
  } else if (!current.includes('.')) {
    current += '.';
  }
  updateDisplay();
}

// Operators
function handleOperator(nextOp) {
  const value = parseFloat(current);
  if (operator && waitingForNew) {
    operator = nextOp;
    return;
  }

  if (previous == null) {
    previous = value;
  } else if (operator) {
    const result = calculate(previous, value, operator);
    current = String(result);
    previous = result;
    updateDisplay();
  }

  waitingForNew = true;
  operator = nextOp;
}

// Calculate function
function calculate(a, b, op) {
  switch (op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b === 0 ? 'Error' : a / b;
    default: return b;
  }
}

// AC, ±, %, =
function clearAll() {
  current = '0';
  previous = null;
  operator = null;
  waitingForNew = false;
  updateDisplay();
}

function toggleSign() {
  if (current !== '0') current = current.startsWith('-') ? current.slice(1) : '-' + current;
  updateDisplay();
}

function percent() {
  current = String(parseFloat(current) / 100);
  updateDisplay();
}

function handleEquals() {
  if (operator == null) return;
  const value = parseFloat(current);
  const result = calculate(previous, value, operator);
  current = String(result);
  previous = null;
  operator = null;
  waitingForNew = true;
  updateDisplay();
}

// Event handling
document.querySelector('.buttons').addEventListener('click', e => {
  const btn = e.target.closest('button');
  if (!btn) return;

  if (btn.dataset.num) {
    inputDigit(btn.dataset.num);
  } else if (btn.dataset.action === 'decimal') {
    inputDecimal();
  } else if (btn.dataset.action === 'clear') {
    clearAll();
  } else if (btn.dataset.action === 'sign') {
    toggleSign();
  } else if (btn.dataset.action === 'percent') {
    percent();
  } else if (btn.dataset.action === 'operator') {
    handleOperator(btn.dataset.operator);
  } else if (btn.dataset.action === 'equals') {
    handleEquals();
  }
});

updateDisplay();
