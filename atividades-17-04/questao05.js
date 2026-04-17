const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let TempCelsius = 0

rl.question("Digite a temperatura Celsius: ", (CelsiusInput) => {
    TempCelsius = CelsiusInput;
    console.log(`${TempCelsius}ºC equivale a ${conversor_temperatura(TempCelsius)}ºF`)
    rl.close()});

const conversor_temperatura = (Celsius) => {
    return Celsius * 9/5 + 32;
}