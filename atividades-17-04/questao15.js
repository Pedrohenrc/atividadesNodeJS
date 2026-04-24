function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let contador = 10;

while (contador >= 1) {
    console.log(contador);

    contador--;
    await delay(1000);
}
console.log("Lançamento!");