const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a hora: ", (HoraInput) => {
    hora = HoraInput;
    if (hora <= 5){
        console.log("Madrugada")
    }
    else if (hora <= 11){
        console.log("Bom dia o sol ja nasceu la na fazendinha ")
    }
    else if (hora <= 17){
        console.log("Boa tarde")
    }
    else if (hora <= 23) {
        console.log("Boa noite")
    }
    rl.close()});