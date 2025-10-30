import { multiply } from "../utils/multiply";

describe("multiply", () => {
  test("multiplicar dois números", () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test("Ler corretamente com o zero", () => {
    expect(multiply(5, 0)).toBe(0);
  });
});
