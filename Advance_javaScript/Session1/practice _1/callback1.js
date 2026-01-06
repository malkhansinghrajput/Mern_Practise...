/**
 * Callback: A callback is a function passed as anargument to another function. This technique allow a function to call another function
 */

console.log("========Start=======")
function add(a,b,callback){
       var c=a+b;
       callback(c)
}
setTimeout(add,2000,76,74,function(c){
       console.log("Addition is = ",c)
})
console.log("==========Stop==========")