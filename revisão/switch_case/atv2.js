const prompt = require("prompt-sync")();

let episodios = prompt("digite um numero: ");

switch (true) {
  case episodios >= 1 && episodios <= 10:
    console.log("serie curta");
    break;
  case episodios >= 11 && episodios <= 100:
    console.log("serie média");
    break;
  case episodios >= 101 && episodios <= 999:
    console.log("serie longa");
    break;
  case episodios > 1000:
    console.log("one piece");
    break;
  default:
    console.log("não existe");
    break;
}
