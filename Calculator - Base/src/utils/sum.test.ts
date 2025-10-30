import { sum } from "../utils/sum";

describe("sum", () => {
  test("somar dois números", () => {
    expect(sum(2, 3)).toBe(5);
  });

  test("soma com númrero decimal", () => {
    expect(sum(2.5, 3.5)).toBe(6);
  });
});
