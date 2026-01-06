/**
 * Exception Handling : it is a mechanism which is used to handle Exception using try and catch block.
 Syntax:
 try {
    ...code Which generates exception 
 } catch (e) {
  print(e)
}
 */

console.log("================Strat=============")
var age= 12;
console.log(" Age is : ",age)
try {
Msg()   
} catch (error) {
    console.log("Exception occure: ",error)
}
console.log("==================Stop=============")