const prompt = require("prompt-sync")();

let numero = prompt("escreva um numero: ");
console.log(numero);

if (numero > 5) {
  console.log("o numero é maior que 5");
}
