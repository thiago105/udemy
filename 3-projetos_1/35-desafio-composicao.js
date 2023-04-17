
const path = require('path')
const fn = require('./24-funcoes')

const caminho = path.join(__dirname, '..', 'legendas')

const simbolos =[
    '.', '?', '_', ',', '"', '♪', '-', '<i>', ' </i>', '\r', '[', ']', '(', ')',]

fn.composicao (
    fn.lerDiretorio,
    fn.lerDiretorio(caminho),
    fn.elementosTerminadosCom('.srt'),
    fn.lerArquivos,
    fn.mesclarElementos,
    fn.separarTextoPor('\n'),
    fn.removerElementoSeVazio,
    fn.removeElementoSeIncluir('-->'),
    fn.removeApenasNumeros,
    fn.removerSimbolos(simbolos),
    // (fn.mesclarElementos),
    // (fn.separarTextoPor(' ')),
    // (fn.removerElementoSeVazio),
    // (fn.removeApenasNumeros),
    // (fn.agruparElementos),
    // (fn.ordenarPorAtribNumerico('qtde', 'desc')),
    console.log
)(caminho)