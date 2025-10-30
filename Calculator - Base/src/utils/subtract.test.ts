import { subtract } from "../utils/subtract";

describe("subtract", () => {
  test("subtrair dois números", () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test("resulta negativo", () => {
    expect(subtract(3, 5)).toBe(-2);
  });
});
