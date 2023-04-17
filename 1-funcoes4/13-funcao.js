function bomDia() { // funcao declaration
    console.log('Bom dia!')}

const boaTarde = function () { // funcao expression
    console.log('Boa tarde!')}

// Passar uma função como parametro pra outra função
function executando(fn) {
    if(typeof fn === 'function') {
        fn()}}
executando(3)
executando(bomDia)
executando(boaTarde)

// Retornar uma função a partir de uma outra função

function potencia(base) {
    return function(exp) {
        return Math.pow(base, exp)
    }
}

const valorBase= potencia(2)
console.log(valorBase(8))

const valorBase2 = potencia(2)(8)
console.log(valorBase2)