const numbers = [ 1, 2, 3, 4, 5, 6 ]

 numbersV2 = numbers.map (el => el * 2)
console.log(numbersV2)

const students = [
    {name: 'jake', nota: 6.4},
    {name: 'susan', nota: 8.6},
    {name: 'emma', nota: 9.4},
    {name: 'peter', nota: 9.1}
]
const getNota = el => el.nota
console.log (students.map(getNota).map(Math.ceil))