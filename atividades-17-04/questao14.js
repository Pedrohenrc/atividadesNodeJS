let notas = [7.5, 8.0, 6.5, 9.0, 5.5, 7.0, 8.5];

let somaNotas = 0;

for (let nota of notas) {
    somaNotas += nota;
}

let media = somaNotas / notas.length;
let acimaDaMedia = 0;

for (let nota of notas) {
    if (nota > media) {
        acimaDaMedia += 1;
    }
}

console.log("Média:", media);
console.log("Alunos acima da média:", acimaDaMedia);