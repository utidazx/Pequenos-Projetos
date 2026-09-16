### Gerenciador de tarefas
## Gerenciador de tarefas básico. O projeto permite criar, atualizar, excluir, mover status e listar tarefas. Feito inteiramente em Javascript rodando inteiramente no terminal via node.js

## Funcionalidades: 
- **Adicionar Tarefa:** Cria novas tarefas com status inicial `pendente`.
- **Atualizar Tarefa:** Permite alterar a descrição ou o status de uma tarefa existente.
- **Excluir Tarefa:** Remove uma tarefa do sistema.
- **Mover Status:** Transfere tarefas para as listas `em andamento` ou `concluída`.
- **Listar Tarefas:** Exibe todas as tarefas organizadas por seus respectivos status.


## Tecnologias Utilizadas

- **JavaScript (ES6+)**
- **Node.js** (Ambiente de execução)
- **Readline** (Módulo nativo do Node.js para interação via terminal)


## Pré-Requisitos

Antes de começar, você precisará ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão 14 ou superior)


## Como Executar o Projeto

1. **Clone ou baixe o repositório:**
   ```bash
   git clone [https://github.com/utidazx/gerenciador-de-tarefas.git](https://github.com/utidazx/gerenciador-de-tarefas.git)
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd GERENCIADOR_TAREFAS
   ```

3. **Execute o arquivo principal pelo terminal:**
   ```bash
   node main.js
   ```


## Como Usar

Ao iniciar o programa, um menu interativo será exibido no terminal:

```text
=================================
     GERENCIADOR DE TAREFAS     
=================================
1 - Adicionar Tarefa
2 - Atualizar Tarefa
3 - Excluir Tarefa
4 - Concluir Tarefa
5 - Mover para Em Andamento
6 - Listar todas as tarefas
0 - Sair
```

Digite o número da opção desejada e pressione `Enter` para interagir com o sistema.

---

## Licença

Este projeto está sob a licença MIT.
