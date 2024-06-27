const prompt = require("prompt-sync")();

const constante = 10;

while (true) {
  let numero = Number(prompt("Digite um numero "));
  if (numero == constante) {
    console.log("parabens, voce acertou o numero");
    break;
  }
  if (numero > constante || numero < constante) {
    console.log("errou");
  }
}
