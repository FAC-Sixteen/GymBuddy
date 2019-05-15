const { sum, mul, sub, div } = require("./math");

test("Adding 1 + 1 equals 2", () => {
  expect(sum(1, 1)).toBe(2);
});
test("Multiplying 1 * 1 equals 1", () => {
  expect(mul(1, 1)).toBe(1);
});
test("Subtracting 1 - 1 equals 0", () => {
  expect(sub(1, 1)).toBe(0);
});
test("Dividing 1 / 1 equals 1", () => {
  expect(div(1, 1)).toBe(1);
});

const fahrenheitToCelsius = temp => {
  return (temp - 32) / 1.8;
};

const celsiusToFahrenheit = temp => {
  return temp * 1.8 + 32;
};

test("Should convert 32 F to 0 C", () => {
  expect(fahrenheitToCelsius(32)).toBe(0);
});

test("Should convert 0 C to 32 F", () => {
  expect(celsiusToFahrenheit(0)).toBe(32);
});
