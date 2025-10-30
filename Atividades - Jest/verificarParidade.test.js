const verificarParidade = require("./verificarParidade");

describe("Teste da função verificarParidade", () => {
  test("Caso de teste 1: Número = 9", () => {
    const resultado = verificarParidade(9);
    expect(resultado).toBe("Ímpar");
    expect(resultado).toBeDefined();
  });

  test("Caso de teste 2: Número = 2", () => {
    const resultado = verificarParidade(2);
    expect(resultado).toBe("Par");
    expect(resultado).toBeDefined();
  });
});

test("Caso de teste 3: Número = 0", () => {
  const resultado = verificarParidade(0);
  expect(resultado).toBe("Par");
});

test("Caso de teste 4: Número = -2", () => {
  const resultado = verificarParidade(-2);
  expect(resultado).toBe("Par");
});

test("Caso de teste 5: Número = -9", () => {
  const resultado = verificarParidade(-9);
  expect(resultado).toBe("Ímpar");
});

test("Caso de teste 6: Número = 2.5", () => {
  expect(() => verificarParidade(2.5)).toThrow();
});

test("Caso de teste 7: Entrada inválida (string)", () => {
  expect(() => verificarParidade("string")).toThrow();
});

