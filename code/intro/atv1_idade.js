const prompt = require("prompt-sync")();

let idade = Number(prompt("digite sua idade: "));

if (idade >= 18) {
  console.log("apto a dirigir");
} else {
  console.log("não possui idade suficiente para dirigir");
}
