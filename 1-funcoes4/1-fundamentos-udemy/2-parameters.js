//  PARAMETROS
function params (a, b, c){
    console.log(a, b, c)
};
params(1, 2, 3, 4, 5);
params(1, 2, 3);
params(1, 3);

//parametros com valor ja atribuido, caso nao queria chama
function params2( a, b, c = 10){
    console.log(a, b, c)
};
params2(1, 2)

//  PARAMETROS USANDO ARRAY
function nums1(nums){
    for (let n of nums){
        console.log(n)
    }
};
nums1([1, 2, 3]);

// podemos tirar [] de um array usando SPREAD/REST
function nums2(...nums){
    console.log(nums)
    };
nums2(1, 2, 3)

// podemos fazer somas usando SPREAD e FOR 
function somarTodos(...nums){
    let total = 0
    for(let n of nums){
        total+= n
    } return total
};
console.log(somarTodos(1, 2, 3));
