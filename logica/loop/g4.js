let passos = 0;
let dado = 20;

while (true) {
  let rolagem = Math.random() * dado;
  rolagem = Math.ceil(rolagem);

  if (rolagem == 1) {
    passos--;
    console.log("volte uma casa");
  }

  if (rolagem <= 11 && rolagem >= 2) {
    passos = passos + 0;
    console.log("não avança");
  }

  if (rolagem >= 19 && rolagem <= 12) {
    passos++;
    console.log("avance uma casa");
  }

  if (rolagem == 20) {
    passos = passos + 10;
    console.log("avance dez casas");
  }

  if (passos >= 10) {
    console.log("ganhou");
    break;
  }
}
