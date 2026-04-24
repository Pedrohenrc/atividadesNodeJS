const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const tabuada = (number) => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} X ${i} = ${number*i}`);
    }
}
rl.question("Digite o numero: ", (NumeroInput) => {
    tabuada(NumeroInput);
    rl.close();
});