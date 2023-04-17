//FUNCTORS
//ARRAY É UM EXEMPLO DE FUNCTORS
const nums = [1, 2, 3, 4, 5, 6]
const novosNums = nums
    .map(el => el + 10)
    .map(el => el * 2)
console.log(nums, novosNums)

function TipoSeguro(valor) {
    return{
        valor, 
        map(fn){
            const novoValor = fn(this.valor)
            return TipoSeguro(novoValor)
        }
    }
}
const resultado = TipoSeguro('esse é um texto')
    .map(texto => texto.toUpperCase())
    .map(texto => `${texto}!!!`)
    .map(texto => texto.split('').join(' '))
console.log(resultado.valor)

//FLAT
const letrasAlinhadas = [
    ['o', ['l'], 'a'],
    [' '],
    ['m', ['u', ['n']], 'd', 'o']
]
const letras = letrasAlinhadas.flat(Infinity)
console.log(letras)

const resultado1 = letras
    .map(l => l.toUpperCase())
    .reduce((a, b) => a +b)
console.log(resultado1)    

//FLATMAP
const letrasAlinhadas1 = [
    ['o', ['l'], 'a'],
    [' '],
    ['m', ['u', ['n']], 'd', 'o']
]
const letras1 = letrasAlinhadas1.flat(Infinity)

const resultado2 = letras1
    .flatMap(l => [l, ','])
    .reduce((a, b) => a +b)
console.log(resultado2) 