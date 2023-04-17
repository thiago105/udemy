let a = 4
console.log(a)

// FUNCTION DECLARATION // nao recebe e nao retorna
function bomDia() {
    console.log('Bom dia')}
bomDia();

// retornando
function somar(a, b){
    return a + b}
const resultadoSomar = somar(3, 3);
console.log(resultadoSomar)

// FUNCTION EXPRESSION // chama funcao dentro de variavel
const boaTarde = function(){
    console.log('Boa tarde')}
    boaTarde();

// ARROW FUNCTION 
const boaNoite = () => console.log('bom dia')
boaNoite()

const saudacao = (nome) => 'fala ' + nome + '!!!'
console.log(saudacao( 'thiago' ))

/// OU ///

const sum = (...numeros) => {
    //console.log(Array.isArray(numeros))
    let total = 0
    for(let n of numeros){
        total += n
    }
    return total
}
console.log (sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

//retorna uma funcao apos a outra funcao usando array/////////
const potencia = base => exp => Math.pow(base, exp)
console.log(potencia(2)(10))

Array.prototype.log = function(){
    console.log ('ola')//  retorna string ola
    console.log(this) // numeros.log chama console.log que retorna [1, 2, 3]
    console.log (this[this.length - 1]) // chama o ultimo numero //10
}
const numeros = [1, 2, 3, 10];
numeros.log() 