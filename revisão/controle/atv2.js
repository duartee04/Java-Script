const prompt = require("prompt-sync")();

let idade = prompt("digite sua idade: ");
console.log(idade);

if (idade > 18) {
  console.log("você é maior de idade");
} else {
  console.log("você é menor de idade");
}
