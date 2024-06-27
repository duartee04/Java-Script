const prompt = require("prompt-sync")();

let nota = Number(prompt("digite uma nota: ").trim());

switch (true) {
  case nota >= 7 && nota <= 10:
    console.log("aprovado");
    break;
  case nota >= 4 && nota <= 6:
    console.log("recuperação");
    break;
  case nota >= 0 && nota <= 3:
    console.log("reprovado");
}
