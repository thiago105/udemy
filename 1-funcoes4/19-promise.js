//PROMISE podemos tbm chamar a promeca em um unica linha usando arrow function => 
let promessa = new Promise(function(cumprirPromessa){
    cumprirPromessa(3)
});
promessa.then(function (valor){
    console.log(valor)
});



// PROMISE -> PASSANDO 2 VALORES, necessario colocar em um corpo
let promessa1 = new Promise(function(cumprirPromessa1) {
    cumprirPromessa1({
        a: 2,
        b: 3
    })
})    
    promessa1.then(function (valor) {
        console.log(valor)
});



//PROMISE -> PASSANDO UMA STRING, necessario colocar [``]
let promessa2 = new Promise(function(cumprirPromessa){
    cumprirPromessa([`thiago, juarez`])
});
promessa2.then((valor) => console.log(valor)) // usando arrow function
promessa2.then(function (valor){
    console.log(valor)
});



//PROMISE -> PASSANDO THEN VARIAS VEZES  
let promessa3 = new Promise(function(cumprirPromessa){
    cumprirPromessa(['thiago, juarez'])
});
promessa3
    .then(valor => valor[ 0 ])
    .then(primeiro => primeiro[ 0 ])
    .then(letraMinuscula => letraMinuscula.toLowerCase())
    .then(letraMaiuscula => console.log(letraMaiuscula))



// CALLBACK DENTRO DE OUTRA CALLBACK - setTimeout
//setTimeout(function(){
//    console.log('exec...')
    
//    setTimeout(function(){
//        console.log('exec...1')

//        setTimeout(function(){
//            console.log('exec...2')
//        }, 4000)
//    },2000)
//}, 3000)



//CALLBACK DENTRO DE OUTRA CALLBACK - setTimeout e promise(then)
function esperar(tempo = 3000){ //esperar 2seg
    return new Promise(function(resolve){ // cria nova promessa
        setTimeout(function(){ // instancia a funcao esperar
            console.log('executando...2 seg')// 
            resolve() // ou- resolve(5000); ser chamada ainda
        }, tempo)
    })
}
//esperar(5000).then(texto => console.log(texto));    /*sera tudo executado de uma vez assim que chamar a funcao esperar esperar(5000), mas oque aparece primeiro é esperar(tempo = 1000)*/
// OU
esperar()// passa ser exec em 2 seg
    .then(() => esperar())// dps de + 2 seg
    .then(esperar)// dps de + 2seg;          // dando total de 6 seg



 //PROMISE - GERANDO NUMERO ENTRE 2 NUMEROS
function gerarNumerosEntre(min, max){
    if(min > max)
    [max, min] = [min, max]
    return new Promise(resolve => {// uma funcao resolve em arrow;
    /* ou */ //resolve(4) // ira retorna numero 4;
        const fator = max - min + 1
        const aleatorio= parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}
//gerarNumerosEntre(1, 20).then(console.log);//gera numero aleatorio
// E / OU
gerarNumerosEntre(1, 20) //gera numero aleatorio entre
    .then(num => num * 10)//pega num gerado e mutiplica 10
    .then(numX10 => `numero gerado ${numX10}`)//atribui string
    .then(console.log)// pega o numero atribuido com string



//PROMISE - 4, chamando varias promise e executar (then) so quando todas promise forem resolvidas 
function gerarNumerosEntre1(min, max, tempo){
    if(min > max )  [max, min] = [min, max]
    return new Promise(resolve => {
        setTimeout(function(){
            const fator1 = max - min + 1
            const aleatorio1 = parseInt(Math.random() * fator1) + min
            resolve(aleatorio1)
        }, tempo)
    })
}
function gerarVariosNumeros(){
    return Promise.all([
        gerarNumerosEntre1(1, 60, 4000),
        gerarNumerosEntre1(1, 60, 1000),
        gerarNumerosEntre1(1, 60, 500),
        gerarNumerosEntre1(1, 60, 3000),
        gerarNumerosEntre1(1, 60, 100),
        gerarNumerosEntre1(1, 60, 1500)
    ])
}
gerarVariosNumeros()
    .then(num => console.log(num))