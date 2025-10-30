const verificarTamanhoDaSenha = require("./tamanhoSenha");

describe("Teste da função verificarTamanhoDaSenha", () => {
  beforeAll(() => {
    // Mock do prompt
    global.prompt = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks(); // Limpa os mocks após cada teste
  });

  test('Caso de teste 1: Senha = "12345678"', () => {
    prompt.mockReturnValueOnce("12345678"); // Simula a entrada do usuário
    const resultado = verificarTamanhoDaSenha();
    expect(resultado).toBe("Você inseriu uma senha válida");
  });

  test('Caso de teste 2: Senha = "12345", depois "12345678"', () => {
    prompt
      .mockReturnValueOnce("12345") // Primeira chamada do prompt
      .mockReturnValueOnce("12345678"); // Segunda chamada do prompt

    const resultado = verificarTamanhoDaSenha();
    expect(resultado).toBe("Você inseriu uma senha válida");
  });

  test('Caso de teste 3: Senha = "1234567", depois "12345678"', () => {
    prompt
      .mockReturnValueOnce("1234567") // Primeira chamada do prompt
      .mockReturnValueOnce("12345678"); // Segunda chamada do prompt

    const resultado = verificarTamanhoDaSenha();
    expect(resultado).toBe("Você inseriu uma senha válida");
  });
});
