const sum = require('/sum'); 

test("Somando dois numeros inteiros", () => {
    expect(sum(1,1)).toBe(2);
});

test("dois mais dois é 4", () => {
    expect(2 + 2).toBe(4);
});

test("atribuição do objeto", () => {
    const data = { one: 1};
    data['two'] = 2; 
    expect(data).toEqual({ one: 1, two: 2}); 
});

test("adicionando numeros positivos nao é zero", () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
        }
    }
    
});

test("adicionando numeros de ponto flutuante", () => {
    const value  = 0.1 + 0.2;

    //expect(value).toBe(0.3); Isso não funciona por causa de um erro de arredondamento 

    expect(value).toBeCloseTo(0.3); // Isso funciona
});

test("nao existe i em team", () => {
    expect("team").not.toMatch(/I/);
});

test("mas existe stop em Christoph", () => {
    expect("Christoph").toMatch(/stop/);
});

const shoppinglist = [
    'fraldas',
    'sacos de lixo',
    'papel toalha',
    'leite'
];

test("a lista de compras tem leite nela", () => {
    expect(shoppinglist).toContain('leite');
    expect(new Set(shoppinglist)).toContain('leite');
});