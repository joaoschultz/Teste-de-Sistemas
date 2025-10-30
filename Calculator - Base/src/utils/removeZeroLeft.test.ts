import { removeZeroLeft } from "../utils/removeZeroLeft";

describe("removeZeroLeft", () => {
  test("remove zero á esquerda", () => {
    expect(removeZeroLeft("000123")).toBe("123");
  });

  test("mantém único zero", () => {
    expect(removeZeroLeft("0")).toBe("0");
  });

  test("lida com números decimais", () => {
    expect(removeZeroLeft("0002.5")).toBe("2.5");
  });
});
