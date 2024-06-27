const prompt = require("prompt-sync")();

let x = Number(prompt("Escreva um número: "));

for (let i = 1; i <= x; i++) {
  console.log(i);
}
