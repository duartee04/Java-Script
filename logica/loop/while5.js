const prompt = require("prompt-sync")();
const nome_correto = "usuario";
const senha_correta = "senha123";

while (true) {
  const nome = prompt("Digite seu nome de usuário: ");
  const senha = prompt("Digite sua senha: ");

  if (nome === nome_correto && senha === senha_correta) {
    console.log("login realizado com sucesso!!");
    break;
  } else {
    console.log("nome de usuário ou senha incorretos, tente novamente.");
  }
}
