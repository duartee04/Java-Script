const numbers = [
  [10, 20, 60],
  [8, 10, 52],
];

for (let i = 0; i < numbers.length; i++) {
  let multiplicacao = 1;

  for (let j = 0; j < numbers[i].length; j++) {
    multiplicacao *= numbers[i][j];
  }

  console.log(
    "A multiplicação dos elementos da linha",
    i + 1,
    "é:",
    multiplicacao
  );
}
