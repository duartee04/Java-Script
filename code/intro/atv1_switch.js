const prompt = require("prompt-sync")();

let caminhão = Number(prompt("digite o peso do seu caminhão: ").trim());

switch (true) {
  case caminhão >= 1000 && caminhão <= 3999:
    console.log("caminhão de pequeno porte");
    break;
  case caminhão >= 4000 && caminhão <= 6000:
    console.log("caminhão de medio porte");
    break;
  case caminhão > 6000:
    console.log("caminhão de grande porte");
    break;
  default:
    console.log("não é um caminhão");
}
