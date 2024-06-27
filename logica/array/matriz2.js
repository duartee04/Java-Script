const numbers = [
  [10, 20, 60],
  [8, 10, 52],
];

numbers.push([30, 40, 70]);
console.log("Matriz após inserção no fim:");
console.log(numbers);

numbers.unshift([5, 15, 25]);
console.log("Matriz após inserção no início:");
console.log(numbers);

const linhaRemovidaDoFim = numbers.pop();
console.log("Linha removida do fim:");
console.log(linhaRemovidaDoFim);

const linhaRemovidaDoInicio = numbers.shift();
console.log("Linha removida do início:");
console.log(linhaRemovidaDoInicio);

console.log("Matriz final:");
console.log(numbers);
