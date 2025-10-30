const calcularMediaENotificarSePassou = require("./calcularMedia");

describe("Teste da função calcularMediaENotificarSePassou", () => {

  test("Caso de teste 1: Notas = [80, 90, 80]", () => {
    const resultado = calcularMediaENotificarSePassou([80, 90, 80]);
    expect(resultado).toContain("83.33");
    expect(resultado).toContain("passou");
  });

  test("Caso de teste 2: Notas = [20, 10, 20]", () => {
    const resultado = calcularMediaENotificarSePassou([20, 10, 20]);
    expect(resultado).toContain("16.67");
    expect(resultado).toContain("não passou");
  });

  test("Caso de teste 3: Notas = [60, 60, 60]", () => {
    const resultado = calcularMediaENotificarSePassou([60, 60, 60]);
    expect(resultado).toContain("60");
    expect(resultado).toContain("passou");
  });

  test("Caso de teste 4: Notas = [100, 100, 100]", () => {
    const resultado = calcularMediaENotificarSePassou([100, 100, 100]);
    expect(resultado).toContain("100");
    expect(resultado).toContain("passou");
  });

  test("Caso de teste 5: Notas = [0, 0, 0]", () => {
    const resultado = calcularMediaENotificarSePassou([0, 0, 0]);
    expect(resultado).toContain("0");
    expect(resultado).toContain("não passou");
  });

  test("Caso de teste 6: Notas = [59.9, 60, 60.1]", () => {
    const resultado = calcularMediaENotificarSePassou([59.9, 60, 60.1]);
    expect(resultado).toMatch(/média foi/);
  });

  test("Caso de teste 7: Nenhuma nota fornecida", () => {
    expect(() => calcularMediaENotificarSePassou([])).toThrow();
  });
});
