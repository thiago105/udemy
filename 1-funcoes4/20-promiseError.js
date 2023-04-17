// TRATAR ERROR DE PROMISE 
function funcionarOuNao(valor, chanceDeErro){
    return new Promise((resolve, reject) =>{
        if(Math.random() < chanceDeErro){
            reject('ocorreu um erro!')
        } else {
            resolve(valor)
        }
    })
}
funcionarOuNao('testando...', 0.5)
    .then(valor => console.log(`validado: ${valor}`))
    .catch(err => console.log(`Error: ${err}`))