/**
 * Async Function (UnBlocking Operation):  An asynchronous function call allows a programe to start a task without waiting for its completon, enabling other operation to proceed concurrently.
 * 
 */

console.log("=========Start=========")
function msg () {
     console.log("Goood Morning")
}
setTimeout(msg,2000);
console.log("========Stop=============")