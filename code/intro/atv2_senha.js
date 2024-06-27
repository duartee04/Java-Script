const prompt = require("prompt-sync")();
const usuariofixo = "duarte";
const senhafixa = 444;
let usuario = prompt("digite seu nome: ");
let senha = prompt("digite sua senha: ");

if (usuario != usuariofixo) {
  console.log("dados incorretos");
} else {
  if (senha != senhafixa) {
    console.log("acesso negado");
  } else {
    console.log("acesso liberado");
  }
}
