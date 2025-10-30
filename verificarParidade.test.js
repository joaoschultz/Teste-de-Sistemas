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
