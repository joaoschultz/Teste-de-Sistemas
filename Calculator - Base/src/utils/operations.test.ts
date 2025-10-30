import {
    OPERATIONS,
    sum,
    subtract,
    multiply,
    divide,
    equal,
    allClear,
  } from "../utils/operations";
  
  describe("Math operation functions", () => {
    test("sum should add two numbers", () => {
      expect(sum(2, 3)).toBe(5);
      expect(sum(-1, 1)).toBe(0);
    });
  
    test("subtract should subtract second number from first", () => {
      expect(subtract(5, 2)).toBe(3);
      expect(subtract(2, 5)).toBe(-3);
    });
  
    test("multiply should multiply two numbers", () => {
      expect(multiply(2, 3)).toBe(6);
      expect(multiply(-2, 3)).toBe(-6);
    });
  
    test("divide should divide first number by second", () => {
      expect(divide(6, 3)).toBe(2);
      expect(divide(5, 2)).toBe(2.5);
    });
  
    test("divide should handle division by zero", () => {
      expect(divide(6, 0)).toBe(Infinity);
    });
  
    test("equal should return the second argument", () => {
      expect(equal(1, 5)).toBe(5);
      expect(equal(100, 7)).toBe(7);
    });
  
    test("allClear should return 0", () => {
      expect(allClear()).toBe(0);
    });
  });
  
  describe("OPERATIONS object", () => {
    test("should map '+' to sum function", () => {
      expect(OPERATIONS["+"]).toBe(sum);
      expect(OPERATIONS["+"](2, 3)).toBe(5);
    });
  
    test("should map '-' to subtract function", () => {
      expect(OPERATIONS["-"]).toBe(subtract);
      expect(OPERATIONS["-"](5, 2)).toBe(3);
    });
  
    test("should map 'x' to multiply function", () => {
      expect(OPERATIONS["x"]).toBe(multiply);
      expect(OPERATIONS["x"](2, 4)).toBe(8);
    });
  
    test("should map '/' to divide function", () => {
      expect(OPERATIONS["/"]).toBe(divide);
      expect(OPERATIONS["/"](6, 3)).toBe(2);
    });
  
    test("should map '=' to equal function", () => {
      expect(OPERATIONS["="]).toBe(equal);
      expect(OPERATIONS["="](1, 9)).toBe(9);
    });
  
    test("should map 'AC' to allClear function", () => {
      expect(OPERATIONS["AC"]).toBe(allClear);
      expect(OPERATIONS["AC"]()).toBe(0);
    });
  });
  