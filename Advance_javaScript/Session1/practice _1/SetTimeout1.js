/**
 * The setTimeout() method execute a block of code after the specified time.The method Executes the code only once. The commonly used Syntax of JavaScript SetTimeout is : setTimeout(function,milliseconds);
 * 1000 milisecond = 1
 */

function msg() {
       console.log("Hello World")
}
//  setTimeout(msg,3000)

/**  
 *  SetInterval:SetInterval() is a JavaScript function that allows you to schedule a function or at specified intervals.
 * Syntax : 
 * setInterval(functionname,interval);
 * 
*/


var id = setInterval(msg,2000)

/*
clearInterval: The clearInterval function in javascript is used to stop the event of the recurring calling of a function at a fixed delay set by the setInterva() function.
*/

setTimeout(() => {
       clearInterval(id)
},10000)