import 'dotenv/config';
import readline from 'node:readline';
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: "seu_token_aqui" // Substitua pelo seu token de acesso pessoal do GitHub
});


const rl = readline.Interface({
  input: process.stdin,
  output: process.stdout
});

async function atividadeRecente(username) {
  const response = await octokit.request('GET /users/{username}/events', {
    username: username,
  });
  return response.data;
}

rl.question('Digite o nome de usuário do GitHub: ', (username) => {
  atividadeRecente(username).then((events) => {
    console.log(events);
    rl.close();
  });
});

