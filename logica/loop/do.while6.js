const prompt = require("prompt-sync")();
const number = Number(prompt("digite um número: "));
let result = number;
let i = 1;
do {
  result = result * i;
  console.log(result, i);
  i++;
} while (i > number);
console.log(result);
