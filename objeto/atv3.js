const prompt = require("prompt-sync")();

let array = [];

for (let i = 0; i < 5; i++) {
  let nome = prompt("Digite um nome: ");
  let objeto = {
    id: i + 1,
    nome: nome,
  };
  array.push(objeto);
}

console.log(array);
