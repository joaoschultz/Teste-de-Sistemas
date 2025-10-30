const podeTrabalhar = require("./trabalho");

describe('Teste para poder trabalhar', () => {
  test ('caso de teste 1: Idade = 82', () => {
      const resultado = podeTrabalhar(82);
      expect(resultado).toBe("Voce ultrapassou a idade de trabalho"); 
      expect(resultado).toContain("ultrapassou a idade"); 
      expect(resultado).not.toBe("voce pode trabalhar"); 
      expect(resultado).toBeDefined(); 
      expect(resultado).toMatch(/ultrapassou a idade/);
  })


  test ('caso de teste 2: Idade = 25', () => {
      const resultado = podeTrabalhar(25);
      expect(resultado).toBe("Voce pode trabalhar"); 
      expect(resultado).toContain("pode"); 
      expect(resultado).toBeDefined(); 
      expect(resultado).toMatch(/pode trabalhar/);
  })

  test ('caso de teste 3: Idade = 14', () => {
      const resultado = podeTrabalhar(14);
      expect(resultado).toBe("Voce é muito jovem para trabalhar"); 
      expect(resultado).toContain("muito jovem"); 
      expect(resultado).not.toBe("Voce ultrapassou a idade de trabalho"); 
      expect(resultado).toBeDefined(); 
      expect(resultado).toMatch(/muito jovem /);
  })
});

