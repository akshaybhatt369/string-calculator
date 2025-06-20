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
    test('add supports for custom delimiter: "//;\n1;2"', () => {
    expect(add('//;\n1;2')).toBe(3);
  });
  
   test('supports multiple multi-char delimiters: "//[***][%%]\\n1***2%%3"', () => {
    expect(add('//[***][%%]\n1***2%%3')).toBe(6);
  });

  test('supports multiple delimiters: "//[*][%]\\n1*2%3"', () => {
    expect(add('//[*][%]\n1*2%3')).toBe(6);
  });
  
    test('supports custom delimiters with multiple characters: "//[***]\\n1***2***3"', () => {
    expect(add('//[***]\n1***2***3')).toBe(6);
  });
});
