// vamos importar duas libs do node logo a baixo

const fs = require('fs') //file system
const path = require('path') //path

const caminho = path.join(__dirname, 'dados.txt')

console.log(__dirname);

function exibirConteudo(err, conteudo){
    console.log(conteudo.toString());
}

fs.readFile(caminho, {}, exibirConteudo)