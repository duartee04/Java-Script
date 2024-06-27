const prompt = require("prompt-sync")();

const x = Number(prompt("digite um numero maior que 0: "));

for (let i = 1; i < x; i++) {
  console.log(" ".repeat(x - i), "*".repeat(i + i - 1));
}
