function calcularIMC(peso, altura) {

    if(peso <= 0 || altura <= 0)
        throw ("Valores inválidos!");

    let imc = peso / (altura * altura);
    let arredondado = parseFloat(imc.toFixed(2));
    let classificacao = "";
    
    if(imc < 18.5)
        classificacao = "Abaixo do peso";
    else if(imc < 25)
        classificacao = "Normal";
    else if(imc < 30)
        classificacao = "Acima do peso";
    else
        classificacao = "Obeso";

    return "O IMC é: "+arredondado+" E sua classificação é: "+classificacao;
}

module.exports = calcularIMC;