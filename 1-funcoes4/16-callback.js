//CALLBACK 1
function exec(fn, a, b){
    return fn (a, b)
}
const somarNoTerminal= (x, y) => console.log(x + y)
const subtrairNoTerminal= (w, z) => console.log (w - z)

exec (somarNoTerminal, 2, 5)
exec (subtrairNoTerminal, 5, 2)

// setInterval -> executa de forma repetida
/*setInterval( () => console.log('thiago...'), 5000)*/

//CALLBACK 2- referente a PASTA dados.txt
const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, '5-dados.txt')

function exibirConteudo(_, conteudo) {
    console.log(conteudo.toString())
}
console.log('inicio...')
fs.readFile(caminho, exibirConteudo)
fs.readFile(caminho, exibirConteudo)
fs.readFile(caminho,(_, conteudo) => console.log(conteudo.toString()))
console.log('fim.')

//CALLBACK 3 - MAP
const nums= [1, 2, 3, 4, 5]
const dobro = n => n * 2
console.log(nums.map(dobro))

/////////////////////////////////////////////

const nomes= ['ana', 'bia', 'gui', 'lia', 'rafa']
const primeiraLetra = texto => texto [0]
const letras= nomes.map(primeiraLetra)
console.log(nomes, letras)
 
////////////////////////////////////////////////////

const carrinho= [
    { nome: 'caneta', quantidade: 10, preço: 7.99},
    { nome: 'impressora', quantidade: 0, preço: 649.50}, 
    { nome: 'caderno', quantidade: 4, preço: 27.10},  
    { nome: 'lapis', quantidade: 3, preço: 5.82}, 
    { nome: 'tesoura', quantidade: 1, preço: 19.20}, 
]
const getNome = obj => obj.nome
console.log(carrinho.map(getNome));

const getTotal = obj => obj.quantidade * obj.preço
const totais = carrinho.map(getTotal);
console.log(totais);

Array.prototype.meuMap = function(fn) {
    const mapped = []
    for(let i = 0;  i < this.length; i ++ ) {
        const resultado = fn(this[ i ], i, this)
        novoArray.push(resultado)};
        return novoArray};

//CALLBACK 4-FILTER
const carrinho2= [
    { nome: 'caneta', quantidade: 10, preço: 7.99},
    { nome: 'impressora', quantidade: 0, preço: 649.50}, 
    { nome: 'caderno', quantidade: 4, preço: 27.10},  
    { nome: 'lapis', quantidade: 3, preço: 5.82}, 
    { nome: 'tesoura', quantidade: 1, preço: 19.20}, 
    
]
const getNome2= item => item.nome
const quantidadeMaiorQue0= item => item.quantidade > 0
const quantidadeMaiorIgualaZero= item => item.quantidade >= 0
const quantidademuitogrande= item => item.quantidade >= 1000

const nomeItemvalidos= carrinho2
     .filter(quantidadeMaiorQue0)
     .map(getNome2)

console.log(nomeItemvalidos);

//CALLBACK 5 - FILTER 2
Array.prototype.meuFilter = function(fn){
    const novoArray=[]
    for(let i = 0; i < this.length; i++){
        if(fn(this[ i ], i, this)){
            novoArray.push(this[ i ])
        }
    }
    return novoArray
}
      const nomeItemvalidos3= carrinho2
     .filter(quantidadeMaiorQue0)
     .map(getNome2)

console.log(nomeItemvalidos3);

