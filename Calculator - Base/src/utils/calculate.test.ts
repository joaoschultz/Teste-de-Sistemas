import { calculate } from "../utils/calculate";

describe("calculate", () => {
  test("Retorna o resultado correto para a adição.", () => {
    expect(calculate("+", "2", "3")).toEqual("5");
  });

  test("Retorna o resultado correto para subtração.", () => {
    expect(calculate("-", "5", "2")).toEqual("3");
  });

  test("Retorna o resultado correto para multiplicação.", () => {
    expect(calculate("*", "2", "3")).toEqual("6");
  });

  test("Retorna o resultado correto para divisão.", () => {
    expect(calculate("/", "6", "3")).toEqual("2");
  });
});
