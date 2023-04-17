//somar(3)(4)(5)
function somar(a) {
    return function(b) {
        return function(c) {
            return a + b + c }}}
const resultado = somar(3)(4)(13)
console.log(resultado);

//calcular (3)(7)(fn)
function calcular(x) {
    return function(y) {
        return function(fn) {
            return fn(x, y,)}}}
            
 // fn -> 3 * 7
 function multiplicar(a, b){
    return a * b}

 //fn -> 3 + 7
 function sum(a, b){
    return a + b}

//fn -> 3 - 7
function subtrair(a, b){
    return a - b}

const resultado2 = calcular(3)(7)(multiplicar);
const resultado3 = calcular(3)(7)(sum);
const resultado4 = calcular(3)(7)(subtrair);
console.log(resultado2)
console.log(resultado3)
console.log(resultado4)
