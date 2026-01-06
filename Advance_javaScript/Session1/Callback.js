/*
Callback:A callback is a function passed as an argument to another function. This technique allows a function to call another function.
*/
console.log("========== Start ==========")
function add(a,b,callback){
    var c= a+b
    // return c
    callback(c)
}
setTimeout(add,2000,76,56,function(c){
    console.log("Addition is:",c)
})
console.log("========== Stop  ==========")
