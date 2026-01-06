/**
 * Promise : A callback used to initailize the promise. This callback is passed two arrgument: a resolve callback used to resolve the promise with a Value or the result of another promise, and a reject callback used to reject the promise with provided reason or error.
 */

new Promise((resolve, reject) => {
    var check = true
    if(check=true){  
        resolve(200000)
    }else{
        reject("Ankit abhi paise nhi h baad m dekhte h")
    }
})
.then((value)=> {
    console.log("Your 1st Installment",value)
    return value+200000
})
.then((value) => {
    console.log("Your 2nd Installment",value)
    return value+100000
})
.then((value) => {
    console.log("Your Last installment",value)
})
.catch((err) => {
    console.log(err)
})