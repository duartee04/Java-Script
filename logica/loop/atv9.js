const prompt = require("prompt-sync")();

let maiornumero = Number(prompt("Digite o seu número: "));
let menornumero = maiornumero;

for (let i = 2; i <= 5; i++) {
  let numero = Number(prompt("Digite o seu número: "));

  if (numero > maiornumero) {
    maiornumero = numero;
  }

  if (numero < menornumero) {
    menornumero = numero;
  }
}

console.log("O maior número é:" + maiornumero);
console.log("O menor número é:" + menornumero);
