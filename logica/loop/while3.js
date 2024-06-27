const prompt = require("prompt-sync")();
let maior;
let menor;
let i = 0;

while (i < 10) {
  const x = Number(prompt("digite um numero: "));

  if (i == 0) {
    maior = x;
    menor = x;
  }

  if (x > maior) {
    maior = x;
  }
  if (x < menor) {
    menor = x;
  }
  i++;
}

console.log(maior);
console.log(menor);
