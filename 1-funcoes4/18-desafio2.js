const carrinho = [
    { nome: 'caneta', quantidade: 10, preco: 7.99, fragil: true},
    { nome: 'impressora', quantidade: 1, preco: 649.50, fragil: true}, 
    { nome: 'caderno', quantidade: 4, preco: 27.10, fragil: false},  
    { nome: 'lapis', quantidade: 3, preco: 5.82, fragil: false}, 
    { nome: 'tesoura', quantidade: 1, preco: 19.20, fragil: true}
]

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

// usando filter, map, reduce;

//1. pegar elementos que tenha FRAGIO: TRUE;
//2. pegar o processamento de quantidade * preco;
//3. gerar a media totais dos valores; 
const fragil = (item => item.fragil)// filter
const getTotal = (item => item.quantidade * item.preco)// map
const getMedia = (acc, el) => {// reduce
        const novaQtde = acc.quantidade + 1
        const novoTotal = acc.total + el
        return {
            quantidade: novaQtde,
            total: novoTotal,
            media: novaQtde / novoTotal
        }
    }
const mediaInicial = {quantidade: 0, total: 0, media: 0}

const media = carrinho
    .filter(fragil)
    .map(getTotal)
    .meuReduce(getMedia, mediaInicial)
    .media

console.log(`media é ${media}!`)