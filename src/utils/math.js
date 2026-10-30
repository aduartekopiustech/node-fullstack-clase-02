const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const calculate = (a, b, callback) => {
  return callback(a, b);
};

export { sum, subtract, multiply, divide, calculate };
