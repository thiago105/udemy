// FUNCTION DECLARATION
//     nao recebe e nao retorna
function sayHello() {
    console.log('hello')
};
sayHello();

//     NAO retorna, mas recebe um parametro(...)
function sayHelloTo(name){
    console.log(`hello ${name}`)
};
sayHelloTo('Thiago');

//     retorna algo, mas NAO recebe um parametro()
function retornaHi(){
    return 'Olá'
};
let retornar = retornaHi();
console.log(retornar);

//     recebe parametro e retorno usando '' e $ 
function retornaHiTo(name){
    return `Olá ${name}`
};
console.log(retornaHiTo('Thiago'));

// ANONYMOUS FUNCTION
//     funcao onde NAO tem nome e NAO retorna 
(function(a, b, c){
    return a+b+c
});

// FUNCTION EXPRESSION                
// podendo usar ANONYMOUS FUNCTION, porem com uma variarel
let somar = function(a, b){
    return a+b
};
let result = somar( 10, 10)
console.log(result);

//FUNCTION ARROW
//     tiramos function e usamos =>
const increment1 = n => {
     return n+1
};
console.log(increment1(5))
//     arrow em uma unica linha, tirando {} e return 
const increment2 = n => n+1;
console.log(increment2(10));
//     arrow com mais de 2 parametros e preciso add ()
const increment3 = (n, m) => n+m;
console.log(increment3(1, 2));

