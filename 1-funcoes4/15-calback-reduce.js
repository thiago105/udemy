//CALLBACK REDUCE 1
const carrinho = [
    { nome: 'caneta', quantidade: 10, preço: 7.99},
    { nome: 'impressora', quantidade: 0, preço: 649.50}, 
    { nome: 'caderno', quantidade: 4, preço: 27.10},  
    { nome: 'lapis', quantidade: 3, preço: 5.82}, 
    { nome: 'tesoura', quantidade: 1, preço: 19.20}, 
]
const getTotal = item => item.quantidade * item.preço
const somar =(acc, el) => acc + el

const totalGeral = carrinho
    .map(getTotal)
    .reduce(somar)
console.log(totalGeral)

// REDUCE - 2
Array.prototype.meuReduce = function(fn, inicial) {
    let acc = inicial
    for(let i =0; i < this.length; i++){
        if(!acc && i === 0){
            acc = this[ i ]
        }else {
            acc = fn(acc,this[ i ], i, this)
        } 
        return acc
    }
};
const totalGeral2 = carrinho
    .map(getTotal)
    .meuReduce(somar)
console.log(totalGeral2)