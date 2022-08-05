// Referência: https://sebhastian.com/javascript-console-input/

const leitura = require("readline");

const lt = leitura.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function imprimeNome (answer) {
    console.log(`Oh, so your name is ${answer}`);
    lt.close();
}

lt.question("What is your name? ", imprimeNome);