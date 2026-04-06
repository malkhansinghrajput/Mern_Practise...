// let a = "JAy shree Ram";

// for(let i = 0 ; i<10 ; i++){
//    console.log(a)
// }

// ====================================
  
//1. write a programe to print a number 1 to n ?n can be anything?
// let n = 199
// for(let i = 1; i <= n; i++){
//     console.log(i)
// }

// ===========================================

//2. write a programme to check the number is psitive,negative and zero?

// let number = prompt("Enter a number to check the num is positive ,negative and Zero")
// if(isNaN(number)){
//     console.log("Invalid input")
// }
// else if(number > 0){
//     console.log(`The ${number} is Positive`)
// }else if(number < 0){
//     console.log(`The ${number} is negative`)
// }else {
//     console.log(`The ${number} is Zero`)
// }    
// else{
//     alert("plese enter valid input")
// }

// =====================================

//3.write to programe to print all even and odd number 0 to n ?

// let n = 90;
// for(let i = 0; i<=n; i=i+2){
// console.log(i)
// }

// *******************************************************

// for(let i = 0; i <= n; i++){
//     if(Math.floor(i/2) === (i/2)){
//         console.log("even number",i)
//     }else{
//         console.log("odd number",i)
//     }
// }
// *******************************************************

// for(let i=0; i<=n; i++){
//     if(i % 2 === 0){
//         console.log('even number is' , i)
//     }else{
//         console.log('odd number is', i)
//     }
// }
// =====================================

//4. write a programe to print odd number 1 to  n ?

// let n = 90;
// for(let i = 1; i<n; i = i+2){
//     console.log(i)
// }
// =====================================

// 5.write a programe to n to 1 reverse count print ?

// let n = 90;
// for(let i = n; i>0; i--){
//     console.log(i)
// }
// =====================================

// 6.write a programe to check the leap year ?

// let year = 2020;
// if(year % 4 === 0 || year % 100 === 0 || year % 400 === 0){
//     console.log('this is leap year',year)
// }
// ---------------------------------------------------------------
// Wap to print all leap year from 2000 to 2050?
// function leapYear(startYear,endYear){
//     for(let i = startYear; i<=endYear; i++){
//         if( i % 4 ===0 || i % 100 === 0 || i % 400 ===0){
//             console.log("Leap year are",i)
//         }
//     }
// }
// leapYear(2019,2050)
// =====================================

// Q7. wap to print queue of any no and square of any no.
//   let num = 9;
//   let square = num * num;
//   let cube = num * num * num;
//   console.log(`square of ${num} is : ${square}`)
//   console.log(`square of ${num} is : ${cube}`)
// =====================================

// Q 8.wap to print 1 to n queue of any no and square of 1 to n no.

// let num = 100;
// for(let i = 1; i<=num; i++){
//     let squre = i * i;
//     let cube = i * i * i;
// console.log(`square of ${i} is ${squre}`)
// console.log (`cube of ${i} is ${cube}`)
// }
// =====================================

// Q 9.Wap to tell how many no is devisible by 7,11,13 from 1 to 100;
    // let num = 100 
    // let count = 0 ;
    //   for(let i = 1; i <= num; i++){
    //     if(i % 7 === 0 || i % 11 === 0 || i % 13 === 0){
    //         count++
    //         console.log(`number is divided by 7,11,13 is ${i}`)
    //     }
    //   }
    //   console.log(`total number is divided by 7,11,13 is ${count}`)
// ===============================================

// Q 10.Wap to tell how many no is devisible by 3 and 5 both from 1 to 100;(15,30,45,60,75,90)

// let num = 100;
// let count = 0;
// for(let i = 1; i<=num; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log(`This ${i} is divisible by 3 and 5 both`);
//         count++;
//     }
// }
// console.log("total number is divisible by 3 and 5 are :",count)
// =====================================

// Q11. Wap to tell maximum no between 5 no.

// let a = 23;
// let b = 56;
// let c = 45;
// let d = 90;
// let e = 12;
// let max = a;
// if(b > max){ max = b}
// if(c > max){ max = c}
// if(d > max){ max = d}
// if(e > max){ max = e}

// console.log("maximum number is ", max)
// =====================================

//12. write a programme swap a two number withiout using third variable ?

// let x =200;
// let y= 100;
// x = x + y;
// y = x - y;
// x = x - y
// console.log(x,y)

// ==================================================================

//13. wap to print the sum of 1 to n (1 se leakr 10 tak ke no ka sum batao)

function sum(n){
    let sum = n * (n +1) / 2

    // for(let i = 1; i<=n; i++){
    //     sum += i
    // }
    console.log(`the total sum of ${n} is : ${sum}`)
}
// sum(100)

// ==================================================================

//14. wap to print the product of 1 to n (1 se leakr 10 tak ke no ka product batao)
 function product(n){
       let prod = 1;
       for(let i = 1; i<=n; i++){
        prod *=i
       }
       console.log("product is ",prod)
 }
// product(4)

// Q15. write a programe of Impure function ?
let x =0;
  function impure(){ 
    // console.log(x)
    x++;
    return x
  }

 console.log(impure()) //1
 console.log(impure()) //2
 console.log(impure()) //3
 console.log(impure()) //4
 console.log(impure()) //5
 console.log(x)//6
  
// ==================================================================

