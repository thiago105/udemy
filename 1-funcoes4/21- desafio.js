const fs = require('fs')
const path = require('path')

function lerArquivos(caminho){
    return new Promise (resolve => {
        fs.readFile(caminho, function(_, conteudo){
            resolve(conteudo.toString())
        })
        console.log('depois de ler')
    })
}
const caminho = path.join(__dirname, '5-dados.txt');

lerArquivos(caminho)
    .then(conteudo =>(console.log(conteudo)));