# Gerenciador de Tarefas & Integração GitHub (CLI)

Uma aplicação em linha de comando (CLI) desenvolvida em **Node.js** e **JavaScript (ES Modules)**. O projeto permite encontrar usuários do Github diretamente pelo terminal e integra-se à **GitHub REST API** utilizando a biblioteca oficial `@octokit/rest`.

---

## Funcionalidades

- **Menu Interativo via Terminal:** Navegação simples utilizando o módulo nativo `readline`.
- **Busca por usuário Github e retorno de suas atividades:** Busca pelo usuário informado pelo utilizador do sistema e volta suas atividades recentes
- **Integração com a API do GitHub:** Conexão autenticada via **Octokit** e **Personal Access Token (PAT)**.
- **Segurança das Credenciais:** Uso de variáveis de ambiente com `dotenv` para não expor chaves no repositório.

---

## Tecnologias Utilizadas

- **JavaScript (ES6+)**
- **Node.js** (Ambiente de execução)
- **@octokit/rest** (Cliente oficial da API do GitHub)
- **dotenv** (Gerenciamento de variáveis de ambiente)
- **node:readline** (Entrada/saída interativa via terminal)

---

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) (Versão 18 ou superior)
- Uma conta no [GitHub](https://github.com) com um **Personal Access Token (PAT)** gerado.

---

## Configuração e Instalação

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/utidazx/GITHUB_USUARIO.git](https://github.com/utidazx/GITHUB_USUARIO.git)
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd GITHUB_USUARIO
   ```

3. **Instale as dependências:**
   ```bash
   npm install dotenv / octokit
   ```

4. **Configure as Variáveis de Ambiente:**
   Crie um arquivo chamado `.env` na raiz do projeto e adicione seu token do GitHub:
   ```env
   GITHUB_TOKEN=ghp_SeuTokenPessoalAquiDoGithub
   ```
5. **Adicione o arquivo .env no gitignore:**
   ```env
   .env
   node_module/
   ```


---

## Como Executar

Execute o comando no terminal do seu projeto:

```bash
node main.js
```

Siga as instruções exibidas na tela digitando os números correspondentes às opções desejadas.

---

## Licença

Este projeto está sob a licença MIT.
