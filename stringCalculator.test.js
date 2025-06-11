const add = require("./stringCalculator");

describe("String Calculator", () => {
  test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("returns same number", () => {
    expect(add("5000")).toBe(5000);
  });

  test("returns addition of 2 number", () => {
    expect(add("5000,1000")).toBe(6000);
  });

  test("returns error when negative number present", () => {
    expect(() => add("5000,1000, -4000")).toThrow(
      "negative numbers not allowed <-4000>"
    );
  });

  test("returns error when more than one negative number present", () => {
    expect(() => add("-28, 5000,1000, -4000")).toThrow(
      "negative numbers not allowed <-28,-4000>"
    );
  });
});
