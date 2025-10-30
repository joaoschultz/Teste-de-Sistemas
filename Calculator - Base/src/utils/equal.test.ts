import { equal } from "../utils/equal";

describe("equal", () => {
  test("retorna verdadeiro se os números são iguais", () => {
    expect(equal(5, 5)).toBe(true);
  });

  test("retorna falso se os números são diferentes", () => {
    expect(equal(5, 4)).toBe(false);
  });
});
