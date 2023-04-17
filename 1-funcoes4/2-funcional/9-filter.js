const numbers = [ 1, 2, 3, 4, 5, 6 ];
const numbers2 = el => el > 3;
const numbers3= el => el % 2 === 0;

console.log(numbers.filter(numbers2)); // valores maiores que 3
console.log(numbers.filter(numbers3)); //valores pares ou 2 em 2

//////////////////////////////////////////////
const students = [
    {name: 'jake', nota: 6.4},
    {name: 'susan', nota: 8.6},
    {name: 'emma', nota: 9.4},
    {name: 'peter', nota: 9.1}
]
const alunosBom = students => students.nota >= 9;
console.log(students.filter(alunosBom));
