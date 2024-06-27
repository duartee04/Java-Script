const prompt = require("prompt-sync")();
let media = 0;

for (let i = 0; i < 10; i++) {
  let x = Number(prompt("digite algum número maior que 0: "));
  media = media + x;
}
let soma = media / 10;
console.log(soma);
