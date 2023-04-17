//CURRYING 3
function textoComTamanhoEntre2(min){
    return function(max){
        return function(erro){
            return function(texto){
                const tamanho2 = (texto || '').trim().length

                if(tamanho2 < min || tamanho2 > max){
                    throw erro
                 }
            }
        }
    }
}
function aplicarValidacao(fn){
    return function (valor){
        try {
            fn(valor)
        } catch(e) {
            return {error: e}
        }
    }
}


const forcarTamanhoPadrao = textoComTamanhoEntre2(4)(255)
const forcarNomeProdutoValido = forcarTamanhoPadrao('nome produto invalido!')
const validarNomeProduto = aplicarValidacao(forcarNomeProdutoValido)

const p1 = {nome: 'A', preco: 14.99, desc: 0.25}
const p2 = {nome: 'AB', preco: 14.99, desc: 0.25}
console.log(forcarNomeProdutoValido(p1.nome))
console.log(validarNomeProduto(p2.nome))





