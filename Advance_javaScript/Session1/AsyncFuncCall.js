/*
Async Function(UnBlocking Operation):
An asynchronous function call allows a program to start a task without waiting for its completion, enabling other operations to proceed concurrently.
*/
console.log("========== Start ==========")
function msg(){
    console.log("Good Morning")
}
setTimeout(msg,2000);
console.log("========== Stop  ==========")
