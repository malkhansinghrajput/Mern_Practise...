/*
Exception Handling:It is a mechanism which is used to handle Exception using try and catch block.
Syntax:
try {
    ...code which generates exception
}catch(e){
    print(e)
}
*/

console.log("=========== Start ==============");
var age = 12
console.log("Age is :",age)
try {
    msg()
} catch (error) {
    console.log("Exception Occur:",error)
}

console.log("=========== Stop  ==============");
