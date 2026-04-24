const fatorial = (number) => {
    let resultado = 1
    for (let i = number; 0 < i; i--) {
        resultado *= i;
    }
    return resultado;
}

const fatorialRecursivo = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * fatorialRecursivo(n - 1);
}

console.log(fatorial(5));
console.log(fatorialRecursivo(5));
console.log(fatorial(10));
console.log(fatorialRecursivo(10));