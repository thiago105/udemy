const numbers = [ 1, 2, 3, 4, 5, 6 ]

const soma = (total, el) => total + el
const total1 = numbers.reduce(soma, 100)
console.log(total1)

/////////////////////////////////////

const total2 = (total, el, i, array) => {
    if(i === array.length - 1){
        return(total + el) / array.length
    } else {
        return total + el
    }
}
console.log(numbers.reduce(total2))
