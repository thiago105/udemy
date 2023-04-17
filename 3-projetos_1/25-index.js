const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'legendas')

const simbolos =[
    '.', '?', '_', ',', '"', '♪', '-', '<i>', ' </i>', '\r', '[', ']', '(', ')',]


fn.lerDiretorio(caminho)
    .then(fn.elementosTerminadosCom('.srt'))// arquivo srt
    .then(fn.lerArquivos) // caminhos de todos arquivos
    .then(fn.mesclarElementos)// juntando os conteudos 
    .then(fn.separarTextoPor('\n'))
    .then(fn.removerElementoSeVazio)//remove linha em branco
    .then(fn.removeElementoSeIncluir('-->')) //remover linha -->
    .then(fn.removeApenasNumeros) //remover qlq numero
    .then(fn.removerSimbolos(simbolos))// remover simbolos acima 
    // .then(fn.mesclarElementos)
    // .then(fn.separarTextoPor(' '))
    // .then(fn.removerElementoSeVazio)
    // .then(fn.removeApenasNumeros)
    // .then(fn.agruparElementos)
    // .then(fn.ordenarPorAtribNumerico('qtde', 'desc'))

    .then(console.log) //executando todos (.then)


