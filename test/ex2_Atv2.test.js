const calcularIMC = require("../src/ex2_Atv2");

describe('Calcular IMC', () => {
    test('Testando exceção', () => {
        expect( () => {
            calcularIMC(0, 1.70);
        }).toThrow("Valores inválidos!");
    });
    test('Abaixo do Peso', () => {
        const res = calcularIMC(55, 1.73);
        expect(res).toBe("O IMC é: 18.38 E sua classificação é: Abaixo do peso");
    });
    test('Normal', () => {
        const res = calcularIMC(90, 1.96);
        expect(res).toBe("O IMC é: 23.43 E sua classificação é: Normal");
    });
    test('Acima do Peso', () => {
        const res = calcularIMC(87, 1.76);
        expect(res).toBe("O IMC é: 28.09 E sua classificação é: Acima do peso");
    });
    test('Obesidade', () => {
        const res = calcularIMC(115, 1.88);
        expect(res).toBe("O IMC é: 32.54 E sua classificação é: Obeso");
    });
});