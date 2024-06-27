const prompt = require("prompt-sync")();

let direção = prompt("qual direção seguir?: ");

if (direção == "direita") {
  console.log("voce está indo para direita");
} else if (direção == "esquerda") {
  console.log("voce está indo para esquerda");
} else if (direção == "frente") {
  console.log("voce está indo para frente");
} else if (direção == "trás") {
  console.log("voce está indo para trás");
}
