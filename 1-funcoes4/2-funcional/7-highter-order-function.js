/*
*function that operate on other function;
*wither by talking them as arguments or by;
*returning them, are called highet-order function.
*/

function run(fn){
    fn()
 }
 
 function sayHello(){
     console.log('hello!')}
 
 run(sayHello)
 
 ///// OU ////
 
 run(function() {
     console.log('hello!!')})

 ///////////////////////////////////////////////////////////////
 
 //2-HIGHTER-ORDER-FUNCTION
 //curring

function finalPrince(tax,price){
    return price * (1 + tax)
}
console.log(finalPrince(0.0875,25.1))
console.log(finalPrince(0.0875, 25.1))
console.log(finalPrince(0.0875, 107.9))

////// OU ////////

/*
function finalPrince(tax){
return function(price){
    return price*(1+tax )
}}
console.log(finalPrince(0.0875)(25.1))
*/