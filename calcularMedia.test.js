const calcularMediaENotificarSePassou = require("./calcularMedia");

describe("Teste da função calcularMediaENotificarSePassou", () => {
  test("Caso de teste 1: Notas = [80, 90, 80]", () => {
    const resultado = calcularMediaENotificarSePassou([80, 90, 80]);
    expect(resultado).toBe("Parabéns! Sua média foi 83.33 e você passou");
    expect(resultado).toContain("média foi 83.33");
    expect(resultado).toContain("Parabéns! Sua média foi 83.33 e você passou")
  });

  test("Caso de teste 2: Notas = [20, 10, 20]", () => {
    const resultado = calcularMediaENotificarSePassou([20, 10, 20]);
    expect(resultado).toBe("Sua média foi 16.67 e você não passou");
  });
});
