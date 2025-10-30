import { isNumber } from "../utils/isNumber";

describe("isNumber", () => {
  test("retorna true se for '5'", () => {
    expect(isNumber("5")).toBe(true);
  });

  test("retorna false se for '.'", () => {
    expect(isNumber(".")).toBe(false);
  });

  test("retorna false se for 'a'", () => {
    expect(isNumber("a")).toBe(false);
  });
});
