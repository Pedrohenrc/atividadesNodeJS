const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a sua nota: ", (NotaInput) => {
    nota = NotaInput;
    if (nota >= 60) {
        console.log("Aprovado")
    }
    else if (nota < 60) {
        console.log("Reprovado")
    }
    rl.close()});