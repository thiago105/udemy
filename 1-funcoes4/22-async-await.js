// ASYNC/AWAIT usando o promise(then)
/*function esperarPor(tempo = 2000){ 
    return new Promise(function(resolve){ 
        setTimeout(() => resolve(), tempo)
    })
}
//esperarPor(2000)
//    .then(() => console.log('exec 1...'))
//    .then(esperarPor)
//    .then(() => console.log('exec 2...'))
//    .then(esperarPor)
//    .then(() => console.log('exec 3...'))

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)//esperado 5seg para comecar executar
    })
}
async function executar(){
    let valor = await retornarValor()//retorna valor da promise e o tempo de 5seg comeca a ser executado
    await esperarPor(1500)
    console.log(`async/awiat ${valor}...`)//executa esse await apos 6 seg
   await esperarPor(1500)
    console.log(`async/awiat ${valor + 1}...`)//executa await apos 1500 seg
    await esperarPor(1500)
    console.log(`async/awiat ${valor + 2}...`)// executa esse await apos 1500 seg 
    return valor + 3// acrescentando 3 no valor do resolve(10)
}
/*executar()*/ //chamando a funcao executar, sem return 

/*async function executarValorDoReturn(){//funcao que executa o valor do retorno 
    const valor = await executar()
    console.log(valor)
}
executarValorDoReturn()*/



// ASYNC / AWAIT- 2 gerar numeros sem duplicidades
function gerarNumerosEntre(min, max, numProibido){
    if(min > max)
    [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio= parseInt(Math.random() * fator) + min// gera num aleatorio apartir de 1
        if(numProibido.includes(aleatorio)){
            reject('numero proibido!')// se numProibido for gerado sera retornado reject
        } else{
        resolve(aleatorio)}//se nao for numProibido segue fluxo 
    })
}
/*gerarNumerosEntre(1, 5, [1, 2, 4])
    .then(console.log)// devolve numero 3 e 5
    .catch(console.log)// devolve string numero proibido*/

async function gerarNumeros(qtdeNumeros){
    try {
    const numeros = []
    for(let _ of Array(qtdeNumeros).fill()){//.fill-> gera varios valores // gerado for para a quatidade e tamanho do meu array
        numeros.push(await gerarNumerosEntre(1, 60, numeros))//tamanho do meu array 1 a 60 
    }
    return numeros
} catch(e) {
    throw "error"
    }
}
gerarNumeros(15)
    .then(console.log)
    .catch(console.log)