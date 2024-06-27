const numbers = [
  [10, 20, 60],
  [8, 10, 52],
];

let soma = 0;

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers[i].length; j++) {
    soma += numbers[i][j];
  }
}

console.log("A soma de todos os elementos da matriz é: ", soma);
