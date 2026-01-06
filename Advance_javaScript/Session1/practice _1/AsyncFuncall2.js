/**
 * Async Function (Unblocking Operation) : An Asynchronous function call allows a programe to start a task without waiting for its completion, enabling other operation to proceed concurrency.
 */

console.log("======start=========")
function add(a,b) {
       var c = a + b;  
       console.log("Addition is : ",c)
}
setTimeout(add,2000,78,82)
console.log("==========stop===========")