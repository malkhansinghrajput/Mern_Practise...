/*
Synchronous Function(Blocking Operation):
Synchronous in Javascript refers to the execution of a program code in a blocking manner. Here tasks are performed sequentially with the help of a call stack. Each individual task must complete before the next one can begin. This results in delays in execution if any task takes a significant amount of time to execute. 
*/

console.log("============ Start =================")
function msg(){
    for(var a=0; a<1234567334; a++);
    console.log(" Good Morning!")
}
msg()
console.log("============ Stop  =================")