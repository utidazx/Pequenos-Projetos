const readline = require('readline');

// Cria a interface para ler o que é digitado no terminal utilizando o módulo readline do Node.js
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// JSON de tarefas com status diferentes
const tarefas = [
  { id: 1, descricao: "Comprar mantimentos", status: "pendente" }
];
const tarefasConcluidas = [
  { id: 4, descricao: "Pagar conta de luz", status: "concluída" }
];
const tarefasAndamento = [
  { id: 2, descricao: "Estudar para a prova", status: "em andamento" }
];

// Função principal do Menu
function exibirMenu() {
  console.log("\n=================================");
  console.log("     GERENCIADOR DE TAREFAS     ");
  console.log("=================================\n");
  console.log("1 - Adicionar Tarefa");
  console.log("2 - Atualizar Tarefa");
  console.log("3 - Excluir Tarefa");
  console.log("4 - Concluir Tarefa");
  console.log("5 - Mover para Em Andamento");
  console.log("6 - Listar todas as tarefas");
  console.log("7 - Listar tarefas pendentes");
  console.log("8 - Listar tarefas em andamento");
  console.log("0 - Sair");

  rl.question("\nEscolha uma opção: ", (opcao) => {
    switch (opcao.trim()) {
      case "1":
        adicionar();
        break;
      case "2":
        atualizar();
        break;
      case "3":
        excluir();
        break;
      case "4":
        concluir();
        break;
      case "5":
        andamento();
        break;
      case "6":
        console.log("\n=== PENDENTES ===\n", tarefas);
        console.log("\n=== EM ANDAMENTO ===\n", tarefasAndamento);
        console.log("\n=== CONCLUÍDAS ===\n", tarefasConcluidas);
        exibirMenu();
        break;
      case "7":
        console.log("\n=== PENDENTES ===\n", tarefas);
        console.log("\n=== EM ANDAMENTO ===\n", tarefasAndamento);
        exibirMenu();
        break;
      case "8":
        console.log("\n=== EM ANDAMENTO ===\n", tarefasAndamento);
        exibirMenu();
        break;
      case "0":
        console.log("\nAté logo!");
        rl.close();
        break;
      default:
        console.log("\nOpção inválida.");
        exibirMenu();
        break;
    }
  });
}

// Lógica das Ações, funções para adicionar, atualizar, excluir, concluir e mover tarefas para andamento
function adicionar() {
  rl.question("Digite a descrição da nova tarefa: ", (desc) => {
    if (desc) {
      tarefas.push({
        id: tarefas.length + tarefasConcluidas.length + tarefasAndamento.length + 1,
        descricao: desc,
        status: "pendente"
      });
      console.log(`Tarefa "${desc}" adicionada!`);
    }
    exibirMenu();
  });
}

function atualizar() {
  rl.question("Digite a descrição exata da tarefa para atualizar: ", (busca) => {
    const index = tarefas.findIndex(t => t.descricao.toLowerCase() === busca.toLowerCase());

    if (index !== -1) {
      rl.question("Escolha o que atualizar (1- Descrição / 2- Status): ", (subOpcao) => {
        if (subOpcao.trim() === "1") {
          rl.question("Digite a nova descrição: ", (novaDesc) => {
            tarefas[index].descricao = novaDesc;
            console.log("Descrição atualizada!");
            exibirMenu();
          });
        } else if (subOpcao.trim() === "2") {
          rl.question("Digite o novo status: ", (novoStatus) => {
            tarefas[index].status = novoStatus;
            console.log("Status atualizado!");
            exibirMenu();
          });
        } else {
          console.log("Opção inválida.");
          exibirMenu();
        }
      });
    } else {
      console.log("Tarefa não encontrada em 'pendentes'.");
      exibirMenu();
    }
  });
}

function excluir() {
  rl.question("Digite a descrição da tarefa a excluir: ", (busca) => {
    const index = tarefas.findIndex(t => t.descricao.toLowerCase() === busca.toLowerCase());
    if (index !== -1) {
      tarefas.splice(index, 1);
      console.log("Tarefa excluída!");
    } else {
      console.log("Tarefa não encontrada.");
    }
    exibirMenu();
  });
}

function concluir() {
  rl.question("Digite a descrição da tarefa para concluir: ", (busca) => {
    const index = tarefas.findIndex(t => t.descricao.toLowerCase() === busca.toLowerCase());
    if (index !== -1) {
      const [removida] = tarefas.splice(index, 1);
      removida.status = "concluída";
      tarefasConcluidas.push(removida);
      console.log("🎉 Tarefa concluída!");
    } else {
      console.log("Tarefa não encontrada.");
    }
    exibirMenu();
  });
}

function andamento() {
  rl.question("Digite a descrição da tarefa para mover para 'em andamento': ", (busca) => {
    const index = tarefas.findIndex(t => t.descricao.toLowerCase() === busca.toLowerCase());
    if (index !== -1) {
      const [removida] = tarefas.splice(index, 1);
      removida.status = "em andamento";
      tarefasAndamento.push(removida);
      console.log("Tarefa movida para 'em andamento'!");
    } else {
      console.log("Tarefa não encontrada.");
    }
    exibirMenu();
  });
}

// Inicia o programa
exibirMenu();