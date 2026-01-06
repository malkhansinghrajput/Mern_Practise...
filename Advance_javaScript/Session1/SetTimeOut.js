/*
SetTimeOut:
The setTimeout() method executes a block of code after the specified time. The method executes the code only once. The commonly used syntax of JavaScript setTimeout is: 
setTimeout(function, milliseconds);
1000 miliseconds = 1 second
*/

function msg(){
    console.log("Hello World")
}
// setTimeout(msg,3000)

/*
SetInterval:SetInterval() is a JavaScript function that allows you to schedule a function or expression to be executed repeatedly at specified intervals.
Syntax:
setInterval(funcname, interval);
*/

var id = setInterval(msg,1000)

/*
clearInterval:The clearInterval function in javascript is used to stop the event of the recurring calling of a function at a fixed delay set by the setInterval() function. 
*/

// setTimeout(()=>{
//     clearInterval(id)
// },10000)
setTimeout(()=>{
    clearInterval(id)
},10000)

// let intervalID = setInterval(() => {
//   console.log("Chal raha hoon...");
// }, 1000);

// // 5 sec baad band karna
// setTimeout(() => {
//   clearInterval(intervalID);
//   console.log("Band ho gaya ✅");
// }, 5000);
