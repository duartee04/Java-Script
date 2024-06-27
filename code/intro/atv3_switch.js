const prompt = require("prompt-sync")();

let produto = Number(prompt("digite uma nota: ").trim());

switch (true) {
  case produto == 101:
    console.log("maçã: 3/kg");
    break;
  case produto == 102:
    console.log("melancia: 5/kg");
    break;
  case produto == 103:
    console.log("morango: 20/kg");
    break;
  default:
    console.log("produto não encontrado");
}
