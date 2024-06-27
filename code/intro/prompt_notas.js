const prom = require("prompt-sync")();
const nota1 = prom("digite a primeira nota: ");
const nota2 = prom("digite a segunda nota: ");
const nota3 = prom("digite a terceira nota: ");

console.log(nota1);
console.log(nota2);
console.log(nota3);

const media = (nota1 + nota2 + nota3) / 3;
console.log(media);
