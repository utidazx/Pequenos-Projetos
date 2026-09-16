const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const despesas = [
    {id: 1, descricao: "Aluguel", valor: 1000, data: "2022-01-30"},
    {id: 2, descricao: "Supermercado", valor: 300, data: "2024-06-01"},
]
    


rl.question("\nqual é o seu nome? ", (nome) => {
  console.log(`\nOlá, ${nome}!`);
  exibirMenu();
})

function exibirMenu() {
rl.question("\nSelecione uma opção:\n1 - Adicionar despesa e valor da despesa\n2 - Atualizar despesa\n3 - Remover despesa\n4 - Ver todas as despesas\n5 - Ver resumo de todas as despesas\n6 - Ver resumo de uma despesa de um mês específico \n7 - Sair\n:", (opcao) => {
    switch (opcao.trim()) {
        case "1":
            adicionarDespesa_e_ValorDespesa();
            break;
        case "2":
            atualizarDespesa();
            break;
        case "3":
            removerDespesa();
            break;
        case "4":
            verTodasDespesas();
            break;
        case "5":
            verResumoDespesas();
            break;
        case "6":
            verResumoDespesaMes();
            break;
        case "7":
            console.log("Saindo do programa...");
            rl.close();
            break;
       }
    })
}



function adicionarDespesa_e_ValorDespesa() {
rl.question("\nAdicione a descrição da despesa: \n", (despesa) => {
  console.log(`\nDescrição da despesa adicionada: ${despesa}\n`);

  rl.question("\nAdicione o valor da despesa: \n", (valor) => {
  console.log(`\nValor da despesa adicionada: ${valor}\n`);
  despesas.push({id: despesas.length + 1, descricao: despesa, valor: parseFloat(valor), data: new Date().toISOString().split('T')[0]})
  exibirMenu();
        })
    })
}


function atualizarDespesa() {
    rl.question("\nQual é o ID da despesa que deseja atualizar? \n", (id) => {
        const despesa = despesas.find(despesa => despesa.id === parseInt(id));
        if (despesa) {
            rl.question("\nQual é a nova descrição da despesa? \n", (novaDescricao) => {
                rl.question("\nQual é o novo valor da despesa? \n", (novoValor) => {
                    rl.question("\nQual é a nova data da despesa? \n", (novaData) => {
                        despesa.descricao = novaDescricao;
                        despesa.valor = parseFloat(novoValor);
                        despesa.data = novaData;
                        console.log("\nDespesa atualizada com sucesso!\n");
                        exibirMenu();
                    });
                });
            });
        } else {
            console.log("\nDespesa não encontrada.\n");
            exibirMenu();
        }
    });
}

function removerDespesa() {
    rl.question("\nQual é o ID da despesa que deseja remover? \n", (id) => {
        const index = despesas.findIndex(despesa => despesa.id === parseInt(id));
        if (index !== -1) {
            despesas.splice(index, 1);
            console.log("\nDespesa removida com sucesso!\n");
        } else {
            console.log("\nDespesa não encontrada.\n");
        }
        exibirMenu();
    });
}

function verTodasDespesas() {
    console.log("\nLista de todas as despesas:\n");
    console.log(despesas);
    exibirMenu();
}

function verResumoDespesas() {
    const totalDespesas = despesas.reduce((total, despesa) => total + despesa.valor, 0);
    console.log(`\nResumo de todas as despesas: R$ ${totalDespesas.toFixed(2)}\n`);
    exibirMenu();
}

function verResumoDespesaMes() {
    rl.question("\nDigite o mês e ano (MM-AAAA) para ver o resumo das despesas: \n", (mesAno) => {
        const [mes, ano] = mesAno.split("-");
        const despesasDoMes = despesas.filter(despesa => {
            const data = new Date(despesa.data);
            return data.getMonth() + 1 === parseInt(mes) && data.getFullYear() === parseInt(ano);
            exibirMenu();
        });
        const totalDespesasDoMes = despesasDoMes.reduce((total, despesa) => total + despesa.valor, 0);
        console.log(`\nResumo das despesas de ${mesAno}: R$ ${totalDespesasDoMes.toFixed(2)}\n`);
        exibirMenu();
    });
}

exibirMenu();