const calculadora = (a, b, operacao) => {
    switch (operacao.toLowerCase()) {
        case "soma":
            return a + b;

        case "subtracao":
            return a - b;

        case "multiplicacao":
            return a * b;

        case "divisao":
            if (b === 0) {
                return "Error: divisão por zero";
            }
            return a / b;
}};

console.log(calculadora(10, 5, `soma`));
console.log(calculadora(10, 5, `subtracao`));
console.log(calculadora(10, 5, `multiplicacao`));
console.log(calculadora(10, 5, `divisao`));
console.log(calculadora(10, 0,`divisao`))