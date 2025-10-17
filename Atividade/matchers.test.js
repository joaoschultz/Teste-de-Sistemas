const matchers = require('./matchers');

describe('Tesye para poder trabalhar'), () => {
    test ('caso de teste 1: Idade = 82', () => {
        const resultado = podeTrabalhar(82);
        expect(resultado).toBe("Voce ultrapassou a idade de trabalhar"); 
        expect(resultado).toContain("ultrapassou"); 
        expect(resultado).not.toBe("Voce pode trabalhar"); 
        expect(resultado).toBeDefined(); 
        expect(resultado).toMatch(/ultrapassou a idade/);
    })
} 

    test ('caso de teste 2: Idade = 25', () => {
        const resultado = podeTrabalhar(25);
        expect(resultado).toBe("Voce pode trabalhar"); 
        expect(resultado).toContain("pode"); 
        expect(resultado).not.toBe("Voce é muito jovem para trabalhar"); 
        expect(resultado).toBeDefined(); 
        expect(resultado).toMatch(/pode trabalhar/);
    })

    test ('caso de teste 3: Idade = 14', () => {
        const resultado = podeTrabalhar(14);
        expect(resultado).toBe("Voce é muito jovem para trabalhar"); 
        expect(resultado).toContain("nao pode"); 
        expect(resultado).not.toBe("Voceultrapassou a idade"); 
        expect(resultado).toBeDefined(); 
        expect(resultado).toMatch(/muito jovem /);
    })
