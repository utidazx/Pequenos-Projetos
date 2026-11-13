# Pokédex

Pokédex web feita com HTML, CSS e JavaScript. Consulta a PokéAPI para exibir nome, número, imagem e tipos de cada Pokémon, em um layout responsivo.

## Funcionalidades

- Cartões com cores conforme o tipo principal do Pokémon.
- Carregamento de 12 Pokémon por vez.
- Botão **Load More** para exibir os próximos Pokémon.
- Listagem configurada para até 905 Pokémon.

## Requisitos

- Um navegador atualizado.
- Acesso à internet para consultar a PokéAPI e carregar imagens e fontes.
- Git, caso escolha baixar o projeto pelo terminal.

## Como baixar

No terminal, execute:

```bash
git clone https://github.com/utidazx/Pequenos-Projetos.git
cd Pequenos-Projetos/dio-pokedex
```

Você também pode baixar o repositório pelo GitHub em **Code → Download ZIP**, extrair o arquivo e abrir a pasta `dio-pokedex`.

## Como executar

### Abrindo no navegador

1. Acesse a pasta `dio-pokedex`.
2. Abra o arquivo `index.html` no navegador.
3. Aguarde o carregamento dos primeiros Pokémon.

### Usando o Visual Studio Code

1. Abra a pasta `dio-pokedex` no Visual Studio Code.
2. Instale a extensão **Live Server**, caso ainda não esteja instalada.
3. Clique com o botão direito em `index.html` e selecione **Open with Live Server**.
4. A página será aberta no navegador.

Não é necessário instalar dependências com npm nem executar uma etapa de build.

## Como usar

Ao abrir a página, os primeiros 12 Pokémon são carregados automaticamente. Cada cartão mostra o número, o nome, os tipos e a imagem do Pokémon.

Clique em **Load More**, no final da lista, para carregar mais 12 Pokémon. O botão desaparece quando a lista atinge o limite configurado.

## Organização dos arquivos

| Caminho | Função |
| --- | --- |
| `index.html` | Estrutura da página. |
| `css/global.css` | Estilos gerais e fontes. |
| `css/pokedex.css` | Cartões, cores dos tipos e layout responsivo. |
| `css/fonts/` | Fontes locais. |
| `js/pokemon-model.js` | Modelo dos dados de um Pokémon. |
| `js/poke-api.js` | Consultas à PokéAPI e conversão dos dados. |
| `js/script.js` | Exibição dos cartões e paginação. |
| `assets/` | Recursos de imagem. |

## Se os Pokémon não carregarem

- Confira sua conexão com a internet.
- Recarregue a página e tente novamente.
- Experimente executar pelo Live Server.
- Abra o console do navegador com **F12** para verificar erros de rede ou de consulta à API.
