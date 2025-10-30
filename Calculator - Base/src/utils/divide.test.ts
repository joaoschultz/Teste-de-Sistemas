import { divide } from "../utils/divide";

describe("divide", () => {
  test("dividir dois números positivos", () => {
    expect(divide(6, 3)).toBe(2);
  });

  test("divisão por zero", () => {
    expect(divide(6, 0)).toBe(Infinity); 
  });
});
