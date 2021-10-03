const GerarNumeroAleatorio = require("../src/ex1_Atv2");

describe('Gerar número Random', () => {
    test('O início do intervalo é um valor negativo', () => {
        const res = GerarNumeroAleatorio(-2, 5);
        expect(res).toBe(-1);
    });

    test('O fim do intervalo é um valor negativo', () => {
        const res = GerarNumeroAleatorio(2, -3);
        expect(res).toBe(-1);
    });

    test('O início do intervalo é igual ao fim do intervalo', () => {
        const res = GerarNumeroAleatorio(6, 6);
        expect(res).toBe(-1);
    });

    test('Um intervalo válido [200, 3000] é fornecido', () => {
        const res = GerarNumeroAleatorio(200, 3000);
        expect(res > 200 && res < 3000);
    });
});