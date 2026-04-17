const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nome = ''
let ano_nascimento = 0
const ano_atual = 2026

rl.question("Digite seu nome: ", (nomeInput) => {
    nome = nomeInput;
    rl.question("Digite seu ano de nascimento: ", (ano_nascimentoInput) => {
        ano_nascimento = ano_nascimentoInput;
        console.log(`Ola ${nome} você tem aproximadamente ${ano_nascimentoCalc(ano_atual, ano_nascimento)}`)
    rl.close()});
});

const ano_nascimentoCalc = (ano_atual, ano_nascimento) => {
    return ano_atual - ano_nascimento;
}

