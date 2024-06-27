function soma(arr) {
  let soma = 0;

  for (let i = 0; i < arr.length; i++) {
    soma = soma + arr[i];
  }
  return soma;
}
console.log(soma([1, 2, 3, 4, 5]));
