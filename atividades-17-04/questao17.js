function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        console.log("Abaixo do peso");
    } else if (imc <= 24.9) {
        console.log("Normal");
    } else if (imc <= 29.9) {
        console.log("Sobrepeso");
    } else {
        console.log("Obesidade");
    }
}

let imc = calcularIMC(70, 1.75);

console.log("IMC:", imc.toFixed(2));
classificarIMC(imc);