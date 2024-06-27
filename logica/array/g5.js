const numbers = [
  [10, 20, 30],
  [10, 20, 30],
];

for (let i = 0; i < numbers[0].length; i++) {
  let columnMultiplication = 1;

  for (let j = 0; j < numbers.length; j++) {
    columnMultiplication *= numbers[j][i];
  }

  console.log(
    `Multiplicação dos elementos na coluna ${i + 1}: ${columnMultiplication}`
  );
}
