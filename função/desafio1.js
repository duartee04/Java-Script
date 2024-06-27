const prompt = require("prompt-sync")();

const lista = [];

console.clear();

function mostrarLista() {
  if (lista.length === 0) {
    console.log("Lista de tarefas vazia.");
  } else {
    console.log("Lista de Tarefas:");
    lista.forEach((tarefa) => {
      console.log(
        `ID: {tarefa.id}, Tarefa: {tarefa.tarefa}, Marcada: {
          tarefa.marcada ? "Sim" : "Não"
        }`
      );
    });
  }
}

function adicionarTarefa() {
  const novatarefa = {
    id: lista.length + 1,
    tarefa: tarefa,
    marcada: false,
  };
  lista.push(novaTarefa);
  console.log("Tarefa adicionada com sucesso!");
}

function marcarTarefa() {
  const id = Number(
    prompt("Digite o ID da tarefa a ser marcada como concluída: ")
  );
  const tarefa = lista.find((item) => item.id === id);
  if (tarefa) {
    tarefa.marcada = true;
    console.log("Tarefa marcada como concluída!");
  } else {
    console.log("ID de tarefa inválido.");
  }
}

function removerTarefa() {
  const id = Number(prompt("Digite o ID da tarefa a ser removida: "));
  const index = lista.findIndex((item) => item.id === id);
  if (index !== -1) {
    lista.splice(index, 1);
    console.log("Tarefa removida com sucesso!");
  } else {
    console.log("ID de tarefa inválido.");
  }
}

function continuar() {
  prompt.hide("pressione Enter para continuar ...");
}

while (true) {
  console.log(
    `MENU
    1 - ver lista
    2 - adicionar tarefa
    3 - marcar tarefa
    4 - remover tarefa
    5 - encerrar`
  );

  const option = Number(prompt("Digite a opção: "));

  if (option === 5) {
    console.clear();
    console.log("Programa encerrado!");
    break;
  }

  console.clear();

  switch (option) {
    case 1:
      mostrarLista();
      continuar();
      break;
    case 2:
      adicionarTarefa();
      continuar();
      break;
    case 3:
      marcarTarefa();
      continuar();
      break;
    case 4:
      removerTarefa();
      continuar();
      break;
    default:
      console.log("Opção inválida");
      continuar();
  }

  console.clear();
}
