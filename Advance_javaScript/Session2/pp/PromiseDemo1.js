/**
 Promise:A callback used to initialize the promise. This callback is passed two arguments: a resolve callback used to resolve the promise with a value or the result of another promise, and a reject callback used to reject the promise with a provided reason or error.
 */

 new Promise((resolve, reject) => {
       var check= true
       if(check==true){
              resolve(200000)
       }else{
              reject("ankit abhi paise nhi h baad m dekhte h")
       }
 })

 .then((value)=>{
       console.log("your 1st Installment",value)
       return value+200000
 })
 .then((value)=>{
       console.log("Your 2nd Installment",value)
       return value+100000
 })
 .then((value)=>{
       console.log("Your last installment",value)
 })
 
 .catch((err)=>{
       console.log(err)
 })