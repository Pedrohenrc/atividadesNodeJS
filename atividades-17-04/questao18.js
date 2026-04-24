const ehPrimo = (numero) => {
    if (numero < 2) {
        return false;
    }

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
};

for (let i = 2; i <= 50; i++) {
    if (ehPrimo(i)) {
        console.log(i);
    }
}