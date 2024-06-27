let pessoa = {
  nome: "Camille",
  idade: 16,
  profissao: "estudante",
  pais: "Brasil",
};
console.log("Nome: " + pessoa.nome);
console.log("Idade: " + pessoa.idade);

pessoa.profissao = "Vendedor da Shopee";
console.log("Profissão: " + pessoa.profissao);

pessoa.email = "camilleduartemarega07@gmail.com";
console.log("Email: " + pessoa.email);

delete pessoa.pais;
console.log(pessoa);
