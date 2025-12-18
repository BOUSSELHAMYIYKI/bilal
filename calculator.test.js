const { add, subtract, multiply, divide, modulo } = require('./calculator');

// Test suite for add function
describe('Add Function', () => {
  test('should add two positive numbers', () => {
    expect(add(5, 3)).toBe(8);
  });

  test('should add positive and negative numbers', () => {
    expect(add(10, -5)).toBe(5);
  });

  test('should add two negative numbers', () => {
    expect(add(-5, -3)).toBe(-8);
  });

  test('should handle zero', () => {
    expect(add(0, 5)).toBe(5);
  });
});

// Test suite for subtract function
describe('Subtract Function', () => {
  test('should subtract two positive numbers', () => {
    expect(subtract(10, 3)).toBe(7);
  });

  test('should subtract negative from positive', () => {
    expect(subtract(10, -5)).toBe(15);
  });

  test('should subtract positive from negative', () => {
    expect(subtract(-5, 3)).toBe(-8);
  });
});

// Test suite for multiply function
describe('Multiply Function', () => {
  test('should multiply two positive numbers', () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test('should multiply with negative numbers', () => {
    expect(multiply(-5, 4)).toBe(-20);
  });

  test('should multiply by zero', () => {
    expect(multiply(5, 0)).toBe(0);
  });

  test('should multiply two negative numbers', () => {
    expect(multiply(-5, -4)).toBe(20);
  });
});

// Test suite for divide function
describe('Divide Function', () => {
  test('should divide two positive numbers', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('should divide with negative numbers', () => {
    expect(divide(-20, 4)).toBe(-5);
  });

  test('should throw error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
  });

  test('should return decimal result', () => {
    expect(divide(7, 2)).toBe(3.5);
  });
});

// Test suite for modulo function
describe('Modulo Function', () => {
  test('should return remainder correctly', () => {
    expect(modulo(17, 5)).toBe(2);
  });

  test('should throw error when modulo by zero', () => {
    expect(() => modulo(10, 0)).toThrow('Modulo by zero is not allowed');
  });

  test('should handle negative numbers', () => {
    expect(modulo(-17, 5)).toBe(-2);
  });
});
