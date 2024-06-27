let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
  cor: "Prata escuro",
};

console.log("Modelo: " + carro.modelo);
console.log("Cor: " + carro.cor);

carro.cor = "jacinto";
console.log("Nova cor: " + carro.cor);

carro.condicao = "usado";
console.log("Condicao: " + carro.condicao);

delete carro.ano;
console.log(carro);
