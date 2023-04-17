//CURRYING
function textoComTamanhoEntre(min, max, erro, texto){
    const tamanho = (texto || '').trim().length

    if(tamanho < min || tamanho > max){
        throw erro
    }
}
const p1 = {nome: 'A', preco: 14.99, desc: 0.25}
textoComTamanhoEntre(4, 255, 'nome invalido!', p1.name)