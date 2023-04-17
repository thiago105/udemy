const students =[
    {name:'jake', nota: 6.4},
    {name:'susan', nota: 8.6},
    {name:'emma', nota: 9.4},
    {name:'peter', nota: 9.1}
]

const alunosBom = students => students.nota >= 9 // 3-filter
const getNota = el =>el.nota // 2-map
const total2= (acc, el, i,array) => { // 4-reduce
    if(i=== array.length - 1){
        return(acc+ el) / array.length
    } else {
        return acc + el
    }
}

console.log(
    students
    .filter(alunosBom)
    .map(getNota)
    .reduce(total2)

)
