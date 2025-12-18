// Calculator functions for basic arithmetic operations
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
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

function modulo(a, b) {
  if (b === 0) {
    throw new Error("Modulo by zero is not allowed");
  }
  return a % b;
}

// Export functions for use in tests and other modules
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo
};

// Main execution (when run directly)
if (require.main === module) {
  console.log("Calculator Project - Running basic tests...");
  console.log("5 + 3 =", add(5, 3));
  console.log("10 - 4 =", subtract(10, 4));
  console.log("6 * 7 =", multiply(6, 7));
  console.log("20 / 5 =", divide(20, 5));
  console.log("17 % 5 =", modulo(17, 5));
}
