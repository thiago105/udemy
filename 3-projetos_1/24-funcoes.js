const fs = require('fs')
const path = require('path')

//USANDO PROMISE
function lerDiretorio(caminho) {
    return new Promise((resolve, reject) => {
        try {
            const  arquivos = fs.readdirSync(caminho)
            const arquivosCompletos = arquivos.map(arquivo => {
                return path.join(caminho, arquivo)
            })
            resolve(arquivosCompletos)
        } catch (e) {
            reject(e)
        }
    })
}

function lerArquivo(caminho){
    return new Promise((resolve, reject) => {
        try {
            const conteudo = fs.readFileSync(caminho, {encoding: 'utf-8'})
            resolve(conteudo.toString())
        } catch (e){
            reject(e)
        }
    })
}

function lerArquivos(caminhos){
    return Promise.all(caminhos.map(caminho => lerArquivo(caminho)))
}


//FILTRAR ELEMENTOS 
function elementosTerminadosCom(padraoTextual) {
    return function (array){
        return array.filter(el => el.endsWith(padraoTextual))//terminado com um caracter...
    }
}
//REMOVER LINHAS EM BRANCOS 
function removerElementoSeVazio(array) {
    return array.filter(el => el.trim())//funcao que remove espacos em brancos /r
}

//REMOVER LINHAS COM TEMPO 
function removeElementoSeIncluir(padraoTextual) {
    return function (array) {
       return array.filter(el => !el.includes(padraoTextual))//removemos -->
    }
}

//REMOVER LINHAS COM NUMEROS 
function removeApenasNumeros(array){
    return array.filter(el => {
        const num = parseInt(el.trim())
        return num !== num//numero estritamente diferente de (const num)
        /*ou*/ //return (num != 0 && !!num) //nao é 0 e nao é nhm numero
    })
}

//REMOVER LINHA DE SIMBOLOS
function removerSimbolos(simbolos){
    return function (array) {
        return array.map(el => {
            let textSemSimbolos = el
            simbolos.forEach(simbolo => {
                textSemSimbolos = textSemSimbolos.split(simbolo).join('')
            })
            return textSemSimbolos
        })
    }
}

//USANDO REDUCE
// function removerSimbolos(simbolos){
//     return function (array) {
//         return array.map(el => {
//             return simbolos.reduce((acc, simbolo) => {
//                 return acc.split(simbolo).join('') /*join ->tirar*/
//             }, el)
//         })
//     }
// }

function mesclarElementos  (array) {
    return array.join(' ')
} 

function separarTextoPor(simbolo){
    return function (texto) {
        return texto.split(simbolo)
    }
}

// VALOR COMO SENDO UM OBJETO 
function agruparElementos (palavras){
    return Object.values(palavras.reduce((acc, palavra) => {
        const el = palavra.toLowerCase()
        const qtde = acc[el] ? acc[el].qtde + 1 : 1
        acc[el] = {elementos: el, qtde}
        return acc
    }, {}))//{}valor inicial com objeto vazio 
}

function ordenarPorAtribNumerico(attr, ordem = 'asc') {
    return function (array) {
        const asc = (01, 02); 01[attr] - 02[attr]
        const desc = (01, 02); 02[attr] - 01[attr]
        return array.sort(ordem === 'asc' ? asc : desc)// se ordem for estritamente asc ira usar asc caso contrario ira usar desc 
    }
}

module.exports = {
    lerDiretorio,
    lerArquivo,
    lerArquivos,
    elementosTerminadosCom,
    removerElementoSeVazio,
    removeElementoSeIncluir,
    removeApenasNumeros,
    removerSimbolos,
    mesclarElementos,
    separarTextoPor,
    agruparElementos,
    ordenarPorAtribNumerico,
} 

