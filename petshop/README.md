# Pet Shop - CRUD em C

Programa de terminal em linguagem C para cadastrar os animais atendidos por um pet shop. Ele implementa as quatro operações de um CRUD (**C**reate, **R**ead, **U**pdate e **D**elete) e guarda os registros em um arquivo binário, então os dados continuam salvos depois que o programa é fechado.

Projeto desenvolvido como trabalho final de disciplina, aplicando **structs**, **ponteiros**, **alocação dinâmica de memória**, **funções** e **arquivos**.

---

## Funcionalidades

O programa mostra um menu com as opções abaixo:

| Opção | Operação | O que faz |
| :---: | :--- | :--- |
| 1 | Cadastrar | Insere um novo animal. Não aceita código repetido. |
| 2 | Consultar | Busca um animal pelo código e mostra seus dados. |
| 3 | Alterar | Localiza um animal pelo código e substitui seus dados. |
| 4 | Remover | Exclui o animal com o código informado. |
| 5 | Exibir todos | Lista todos os animais cadastrados. |
| 0 | Sair | Encerra o programa. |

Cada animal tem os seguintes dados:

| Campo | Tipo | Observação |
| :--- | :--- | :--- |
| Código | `int` | Identifica cada animal de forma única. |
| Nome | `char[50]` | |
| Espécie | `char[30]` | |
| Raça | `char[30]` | |
| Idade | `int` | |
| Proprietário | `char[50]` | |
| Serviço | `char[50]` | Ex.: banho, tosa, vacina. |
| Valor | `float` | Mostrado com duas casas decimais. |

---

## Como compilar e executar

É preciso ter o compilador **GCC** instalado.

### Windows

1. Instale o [MSYS2](https://www.msys2.org/) e, no terminal **MSYS2 UCRT64**, instale o GCC:
   ```bash
   pacman -S mingw-w64-ucrt-x86_64-gcc
   ```
2. Adicione `C:\msys64\ucrt64\bin` à variável de ambiente `Path` e reabra o terminal ou o editor.
3. Na pasta `petshop`, compile e execute:
   ```powershell
   gcc petshop.c -o petshop
   .\petshop.exe
   ```

### Linux / macOS

```bash
gcc petshop.c -o petshop
./petshop
```

> Execute o programa pelo terminal. Extensões que mostram o resultado numa aba de saída somente leitura não aceitam o que é digitado no `scanf`.

---

## Como os dados são salvos

Os registros ficam no arquivo binário `petshop.bin`, criado na mesma pasta em que o programa é executado.

```
petshop.bin:  [ quantidade ]  [ animal 1 ]  [ animal 2 ]  [ animal 3 ] ...
               sizeof(int)     sizeof(struct Pet) cada um
```

- **Ao abrir o programa**, a função `carregar()` lê a quantidade e depois todos os animais com `fread` (modo `rb`). Se o arquivo ainda não existir, a lista começa vazia.
- **A cada mudança** (cadastro, alteração ou remoção), a função `salvar()` regrava o arquivo inteiro com `fwrite` (modo `wb`).

Para começar o cadastro do zero, basta apagar o arquivo `petshop.bin`.

---

## Estrutura do código

| Parte | Responsabilidade |
| :--- | :--- |
| `struct Pet` | Ficha com os dados de um animal. |
| `struct Pet *lista` | Ponteiro para o vetor de animais, criado com `malloc`. |
| `int n` | Quantidade de animais cadastrados. |
| `carregar()` | Lê o arquivo para a memória. |
| `salvar()` | Grava a memória no arquivo. |
| `lerDados(i)` | Lê pelo teclado os dados do animal da posição `i`. |
| `mostrar(i)` | Exibe os dados do animal da posição `i`. |
| `cadastrar()` | Confere se o código já existe e insere o animal na próxima posição livre. |
| `consultar()` | Procura o código e mostra o animal. |
| `alterar()` | Procura o código e lê os novos dados por cima dos antigos. |
| `remover()` | Procura o código e coloca o último animal da lista no lugar do removido. |
| `exibir()` | Mostra todos os animais. |
| `menu()` | Exibe as opções. |
| `main()` | Aloca a memória, carrega os dados, repete o menu e libera a memória no final. |

### Conceitos aplicados

| Conceito | Onde aparece |
| :--- | :--- |
| Struct | `struct Pet` |
| Ponteiro | `struct Pet *lista` |
| Alocação dinâmica | `malloc(100 * sizeof(struct Pet))` no início do `main` e `free(lista)` no final |
| Arquivos | `fopen`, `fread`, `fwrite` e `fclose`, com verificação de `NULL` |
| Funções | Uma função para cada operação do CRUD, além das funções auxiliares |

---

## Limitações conhecidas

- **Textos sem espaço:** os campos de texto são lidos com `scanf("%s")`, que para no primeiro espaço. Use, por exemplo, `Joao` ou `Banho_e_tosa`.
- **Limite de 100 animais:** definido no `malloc`. Ao atingir o limite, o programa mostra "Cadastro cheio!".
- **Ordem após remover:** o último animal ocupa a posição do removido, então a ordem da lista pode mudar.
- **Arquivo binário:** o `petshop.bin` não pode ser lido num editor de texto e depende do tamanho da `struct Pet`. Se a struct for alterada, apague o arquivo antigo.

---

## Exemplo de uso

```
===== PET SHOP =====
1 - Cadastrar
2 - Consultar
3 - Alterar
4 - Remover
5 - Exibir todos
0 - Sair
Escolha: 1
Codigo: 1
Nome do animal: Rex
Especie: Cachorro
Raca: Vira-lata
Idade: 3
Proprietario: Joao
Servico: Banho
Valor: R$ 80.50
Animal cadastrado!
```
