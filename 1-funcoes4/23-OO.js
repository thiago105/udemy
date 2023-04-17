// FUNCAO CONSTRUTORA - USANDO THIS PARA PODER DAR UMA ESTANCIA
// this usado para poder dar uma estancia a NEW PRODUTO, ou seja, como fosse uma um objeto, this.nome passa valer nome do produto "caneta"!

function produto (nome, preco, desc = 0.15) {
    this.nome = nome
    this.preco = preco
    this.desc = desc

    this.precoDesconto =  function(){
        return this.preco * (1 - this.desc)
    }
}
const p1 = new produto('caneta', 10)
const p2 = new produto('geladeira',3000)

console.log(p1.nome)
console.log(p2.preco)
console.log(p2.precoDesconto())



//EXEMPLO DE CLASSE - OO
class produto1 {
    constructor(nome, preco, desc = 0.20) {
        this.nome = nome
        this.preco = preco
        this.desc = desc
    }
        precoDesconto1() {// pode tbm acessar usando get precoDesconto1
            return this.preco * (1 - this.desc)
        }
}
const p3 = new produto1('caneta', 20)
const p4 = new produto1('geladeira',5000)

console.log(p3.nome)
console.log(p4.preco)
console.log(p4.precoDesconto1())// caso get precoDesconto1, retirar () por nao ser funcao 



// OO- 3- USANDO PROTOTYPE
function produto2(nome, preco, _desc = 0.15) {
    this.nome = nome
    this.preco = preco
    this.desc = _desc

    this.precoDesconto2 =  function(){
        return this.preco * (1 - this._desc)
    }
}
produto2.prototype.log = function(){
    console.log(`nome: ${this.nome} preco: R$ ${this.preco}`)
}
Object.defineProperty(produto2.prototype, 'desc', {
    get: function(){
        return this._desc
    }
})
Object.defineProperty(produto2.prototype, 'descString', {
    get: function(){
        return `${this._desc * 100}%`
    }
})
const p5 = new produto2('caneta', 10)
const p6= new produto2('geladeira',3000)

console.log(p5.nome)
console.log(p6.preco)
console.log(p6.precoDesconto2())
console.log(p6.desc)
console.log(p6.descString)
