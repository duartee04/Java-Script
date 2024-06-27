const prompt = require("prompt-sync")();
const nota1 = Number(prompt("digite uma nota: "));
const nota2 = Number(prompt("digite uma nota: "));
const nota3 = Number(prompt("digite uma nota: "));

console.log(nota1);
console.log(nota2);
console.log(nota3);

const media = (nota1 + nota2 + nota3) / 3;
console.log(media);

if (media < 4) {
  console.log("reprovado");
} else {
  if (media >= 4 && media < 7) {
    console.log("recuperação");
  } else {
    console.log("aprovado");
  }
}
