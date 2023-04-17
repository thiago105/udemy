/*
* a programing language is said to have
*firts-class functions when functions in
*that language are treated like any other
*variable
*/


const add=(a, b) => a + b

const subtract = (a, b) => a - b

const multiply = function(a, b){
     return a*b
}
const divide = function(a, b) {
    return a / b
}

// console.log(add(10,20))
// console.log(subtract(10,20))
// console.log(multiply(10,20))
// console.log(divide(10,20))


const subObject = function({ oi, ok, opa }){
    // let { oi, ok } = data //desestruturação

    console.log('valor de oi', oi)
    console.log('valor de ok', ok)
    console.log('valor de opa', opa)
    return data
}

let data = { //objeto
    oi: 9,
    ok: 7
}

console.log(subObject(data))


