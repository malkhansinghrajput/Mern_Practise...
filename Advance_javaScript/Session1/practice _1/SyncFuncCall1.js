/**
 * Synchronous Function(Blocking Operation): Synchronous in javaScript refers to the execution of a programe code in a blocking manner. Here tasks are performed sequentially with the help of a call stack. Each individual tasks must complete before the next one can begin. This result in delays in execution of any task takes a significant amount of time to execute . 
 */

console.log("===========start==========")
function msg() {
 for(var a=0;  a<12345678787; a++);
  console.log("Good Morning")    
}
msg()
console.log("=========stop============")