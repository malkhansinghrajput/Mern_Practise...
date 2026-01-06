/*
Async Function(UnBlocking Operation):
An asynchronous function call allows a program to start a task without waiting for its completion, enabling other operations to proceed concurrently.
*/
console.log("========== Start ==========")
function add(a,b){
    var c= a+b
    console.log("Addition is:",c)
}
setTimeout(add,2000,45,56)
console.log("========== Stop  ==========")
