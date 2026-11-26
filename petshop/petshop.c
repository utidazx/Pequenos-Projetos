#include <stdio.h>
#include <stdlib.h>

struct Pet {
    int codigo;
    char nome[50];
    char especie[30];
    char raca[30];
    int idade;
    char proprietario[50];
    char servico[50];
    float valor;
};

struct Pet *lista;
int n = 0;

void carregar() {
    FILE *arq = fopen("petshop.bin", "rb");

    if (arq != NULL) {
        fread(&n, sizeof(int), 1, arq);
        fread(lista, sizeof(struct Pet), n, arq);
        fclose(arq);
    }
}

void salvar() {
    FILE *arq = fopen("petshop.bin", "wb");

    if (arq == NULL) {
        printf("Erro ao salvar o arquivo!\n");
    } else {
        fwrite(&n, sizeof(int), 1, arq);
        fwrite(lista, sizeof(struct Pet), n, arq);
        fclose(arq);
    }
}

void lerDados(int i) {
    printf("Nome do animal: ");
    scanf("%s", lista[i].nome);
    printf("Especie: ");
    scanf("%s", lista[i].especie);
    printf("Raca: ");
    scanf("%s", lista[i].raca);
    printf("Idade: ");
    scanf("%d", &lista[i].idade);
    printf("Proprietario: ");
    scanf("%s", lista[i].proprietario);
    printf("Servico: ");
    scanf("%s", lista[i].servico);
    printf("Valor: R$ ");
    scanf("%f", &lista[i].valor);
}

void mostrar(int i) {
    printf("\nCodigo: %d\n", lista[i].codigo);
    printf("Nome: %s\n", lista[i].nome);
    printf("Especie: %s\n", lista[i].especie);
    printf("Raca: %s\n", lista[i].raca);
    printf("Idade: %d\n", lista[i].idade);
    printf("Proprietario: %s\n", lista[i].proprietario);
    printf("Servico: %s\n", lista[i].servico);
    printf("Valor: R$ %.2f\n", lista[i].valor);
}

void cadastrar() {
    int codigo, i, existe = 0;

    if (n == 100) {
        printf("Cadastro cheio!\n");
    } else {
        printf("Codigo: ");
        scanf("%d", &codigo);

        for (i = 0; i < n; i++) {
            if (lista[i].codigo == codigo) {
                existe = 1;
            }
        }

        if (existe == 1) {
            printf("Ja existe um animal com esse codigo!\n");
        } else {
            lista[n].codigo = codigo;
            lerDados(n);
            n++;
            salvar();
            printf("Animal cadastrado!\n");
        }
    }
}

void consultar() {
    int codigo, i, achou = 0;

    printf("Codigo para consultar: ");
    scanf("%d", &codigo);

    for (i = 0; i < n; i++) {
        if (lista[i].codigo == codigo) {
            mostrar(i);
            achou = 1;
        }
    }

    if (achou == 0) {
        printf("Animal nao encontrado.\n");
    }
}

void alterar() {
    int codigo, i, achou = 0;

    printf("Codigo para alterar: ");
    scanf("%d", &codigo);

    for (i = 0; i < n; i++) {
        if (lista[i].codigo == codigo) {
            printf("Digite os novos dados:\n");
            lerDados(i);
            achou = 1;
        }
    }

    if (achou == 1) {
        salvar();
        printf("Animal alterado!\n");
    } else {
        printf("Animal nao encontrado.\n");
    }
}

void remover() {
    int codigo, i, achou = 0;

    printf("Codigo para remover: ");
    scanf("%d", &codigo);

    for (i = 0; i < n; i++) {
        if (lista[i].codigo == codigo) {
            lista[i] = lista[n - 1];
            n--;
            achou = 1;
        }
    }

    if (achou == 1) {
        salvar();
        printf("Animal removido!\n");
    } else {
        printf("Animal nao encontrado.\n");
    }
}

void exibir() {
    int i;

    if (n == 0) {
        printf("Nenhum animal cadastrado.\n");
    }

    for (i = 0; i < n; i++) {
        mostrar(i);
    }
}

void menu() {
    printf("\n===== PET SHOP =====\n");
    printf("1 - Cadastrar\n");
    printf("2 - Consultar\n");
    printf("3 - Alterar\n");
    printf("4 - Remover\n");
    printf("5 - Exibir todos\n");
    printf("0 - Sair\n");
    printf("Escolha: ");
}

int main() {
    int opcao;

    lista = malloc(100 * sizeof(struct Pet));

    if (lista == NULL) {
        printf("Erro de memoria!\n");
        return 1;
    }

    carregar();

    do {
        menu();
        scanf("%d", &opcao);

        switch (opcao) {
            case 1: cadastrar(); break;
            case 2: consultar(); break;
            case 3: alterar();   break;
            case 4: remover();   break;
            case 5: exibir();    break;
            case 0: printf("Saindo...\n"); break;
            default: printf("Opcao invalida!\n");
        }
    } while (opcao != 0);

    free(lista);
    return 0;
}
