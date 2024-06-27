const prompt = require("prompt-sync")();

const x = Number(prompt("Digite um número: "));
let contador = 0;

for (let i = 1; i <= x; i++) {
  if (x % i == 0) {
    contador++;
  }
}
if (contador == 2) {
  console.log("primo");
} else {
  console.log("n e primo");
}
