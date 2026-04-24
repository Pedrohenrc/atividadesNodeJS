const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let idade = 0
let temcarteirinha = false
rl.question("Digite sua idade: ", (IdadeInput) => {
    idade = IdadeInput;
    rl.question("Voce tem carteirinha?(y pra sim e n pra nao): ", (CarteirinhaInput) => {
        if (CarteirinhaInput === `y`){
            temcarteirinha = true;
        }
        else temcarteirinha = false;

        if (idade <= 12) {
            console.log("R$ 15,00");
        } else if (idade >= 13 && idade <= 25 && temcarteirinha) {
            console.log("R$ 20,00");
        } else if (idade >= 60) {
            console.log("R$ 15,00");
        } else {
            console.log("R$ 30,00");
        }
    rl.close();
    })
});