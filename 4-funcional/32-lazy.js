function eager(a, b){
    const valor = Math.pow(a, 3)
    return valor + b
}
console.log(eager(3,100))
console.log(eager(3,200))
console.log(eager(3,300))

//processamento com tempo mais pesado
function eager1(a, b){
    const fim = Date.now() + 2500
    while(Date.now() < fim){}
        const valor1 = Math.pow(a, 3)
        return valor1 + b
    }
console.time('#1')
console.log(eager1(3,100))
console.log(eager1(3,200))
console.log(eager1(3,300))
console.timeEnd('#1')

//VERSAO LAZY
function lazy(a) {
    const fim2 = Date.now() + 2500
    while(Date.now() < fim2){}
        const valor2 = Math.pow(a, 3)
        return function(b){
            return valor2 + b
        }
    }

console.time('#2')
const lazy3 = lazy (3)
console.log(lazy3(100))
console.log(lazy3(200))
console.log(lazy3(300))
console.timeEnd('#2')