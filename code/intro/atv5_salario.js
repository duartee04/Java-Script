const prompt = require("prompt-sync")();

const salario = Number(prompt("digite seu salario: "));

let imposto;

if (salario <= 2112) {
  console.log("você está isento do imposto");
} else if (salario >= 2112.01 && salario <= 2826.65) {
  (salario * 7.5) / 100;

  console.log("você deve pagar R$" + imposto, "que é 7.5% do seu salário");
} else if (salario >= 2826.66 && salario <= 3751.05) {
  imposto = (salario * 15) / 100;
}
