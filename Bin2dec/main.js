const rlquestion = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

rlquestion.question('Digite 8 digitos binários (0 ou 1): ', (aux) => {
    if (aux.length !== 8 || !/^[01]+$/.test(aux)) {
        console.log("Você digitou um valor inválido, digite apenas 0 ou 1. Só podem ser 8 digitos");
    }
    else {
        const pack = (bin) => {
            let decimal = 0;
            for (let i = 0; i < bin.length; i++) {
                decimal = decimal * 2 + parseInt(bin[i]);
            }
            console.log(`O valor decimal é: ${decimal}`);
        };
        pack(aux);
    }
rlquestion.close();
});