const prompt = require("prompt-sync")();

let letra = prompt("escreva uma letra: ");
switch (true) {
  case letra == "a":
    console.log("letra a digitada");
    break;
  case letra == "A":
    console.log("letra a digitada");
    break;
  case letra == "b":
    console.log("letra b digitada");
    break;
  case letra == "B":
    console.log("letra b digitada");
    break;
  default:
    console.log(
      "o prazo para as atividades está entre a letra G e K do teclado"
    );
    break;
}
