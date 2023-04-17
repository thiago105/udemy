// funcao pura e uma funcao em que o valor de retorto é determinado APENAS por seus valores de entrada, sem efeitos colaterais obsevaveis 

// impura = PI é um valor externo !
// const PI = 3.141292...
function areaCirc(raio){
    return raio * raio * Math.PI // estavel
}
console.log(areaCirc(10))
console.log(areaCirc(10))

// pura =  !
function areaCircPura(raio, pi){
    return raio * raio * pi
}
console.log(areaCircPura(10, 3.14))
console.log(areaCircPura(10, 3.141592))
console.log(areaCircPura(10, Math.PI))

//FUNCAO PURA - 2
//funcao impura
function gerarNumeroAleatorio(min, max) {
    const fator = max - min + 1
    return parseInt(Math.random() * fator) + min 
}
console.log(gerarNumeroAleatorio(50,100))
console.log(gerarNumeroAleatorio(50,100))
console.log(gerarNumeroAleatorio(50,100))
console.log(gerarNumeroAleatorio(50,100))
console.log(gerarNumeroAleatorio(50,100))

//FUNCAO PURA - 3
//mock -> simular uma dependencia externa
//pura
let qtdedeExecucao = 0

function somar (a, b){
    qtdedeExecucao ++
    return a+b
}
console.log(qtdedeExecucao)
console.log(somar(68,31))
console.log(somar(68,31))
console.log(somar(68,31))
console.log(somar(68,31))
console.log(somar(68,31))
console.log(qtdedeExecucao)

//HIGHER - ORDER - FUNCTION
/*funcoes que operam em outra funcao
tomando-as como argumentos ou retornando-as
sao chamadas de higher-order function*/

function executar(fn, ...params){
    return function (textoInicial){
     return `${textoInicial} ${fn (...params)}!`
    }
}
function somar1 (a, b, c){
    return a + b + c
}
function multi(a, b){
    return a * b
}
const r1 = executar(somar1, 4, 5, 6)('o resultado da soma è')
const r2 = executar(multi, 30, 40) ('o resultado da multiplicação é')
console.log(r1)
console.log(r2)

//FIRST - CLASS - FUNCTION
// diz que uma linguagem de programação possui
//funcao de primeira classe quando funcao nessa
// linguagem sao tratadas como qualquer outra variavel

const x = 3
const y = function(txt) {
    return `esse é o texto: ${txt}`
}
console.log(x)
console.log(y('olá'))

