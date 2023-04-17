//CURRYING 2 passando de forma parcial
function textoComTamanhoEntre(min){
    return function(max){
        return function(erro){
            return function(texto){
                const tamanho = (texto || '').trim().length

                if(tamanho < min || tamanho > max){
                    throw erro
                 }
            }
        }
    }
}
const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255)
const forcarNomeProdutoValido = forcarTamanhoPadrao('nome produto invalido!')

const p2 = {nome: 'A', preco: 14.99, desc: 0.25}
forcarNomeProdutoValido(p2.nome)





