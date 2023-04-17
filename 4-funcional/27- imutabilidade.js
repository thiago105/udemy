//IMUTABILIDADE
//funcao pura onde o valor do array nao foi modificado 
function ordenar(array) {
    return [...array].sort()
}
const nums = [3, 1, 7, 9, 4, 6]
ordenar(nums)
console.log(nums)
//funcao pura onde o valor do array é modificado
const nums1 = [3, 1, 7, 9, 4, 6]
    nums1.sort()
console.log(nums1)

//IMUTABILIDADE 2 -  dados mutaveis#1
const nums2 = [4, 8, 3, 2, 9, 1, 9, 3]
let total = 0;

for(let i = 0; i < nums2.length; i++ ){
    total += nums2 [i]
}
console.log(total)
//
//USANDO REDUCE - nao mexe no array original , retorna numero, array, objeto
const nums3 = [4, 8, 3, 2, 9, 1, 9, 3]

const somar3 = (a, b) => a + b
const total1 = nums3.reduce(somar3)
console.log(total1)

//RECURSIVIDADE
const nums4 = [4, 8, 3, 2, 9, 1, 9, 3];
function somarArray(array, total =0){
    if(!array)/*ou*/ // if(array.length === 0)
    return somarArray(array, total)
}
somarArray(nums4)

//IMUTABILIDADE 3
const pessoa = {
    nome: 'thiago',
    altura: '1,76',
    cidade: 'sao paulo'
}
//atribuicao por referencia
//impura
function alterarPessoa(novaPessoa){
novaPessoa.nome = 'juarez'
novaPessoa.cidade = 'parana'
}
alterarPessoa(pessoa)
console.log(pessoa)
//passagem por referencia(impura)
function alterarPessoa1(pessoa){
    const novaPessoa1 = {...pessoa}
    novaPessoa1.nome = 'juarez'
    novaPessoa1.cidade = 'parana'
    return novaPessoa1
    }
    const novaPessoa1 = alterarPessoa1(pessoa)
    alterarPessoa1(pessoa)
    console.log(novaPessoa1)
