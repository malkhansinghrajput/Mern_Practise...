// let n = prompt("enter a number")
// n = Number(n)
// console.log(typeof (n))

//1.write a programe to tell enter no is prime or not.?

function isPrime(n){
    if(n==1){
       return console.log(n,"is not prime number")
    }
   for(let i = 2; i < n; i++){
    if(n % i === 0){
        return console.log(n, "is not prime number")
    }
    }
    return console.log(n,"is Prime number")
}
// ----------------------------------
function isPrime(n) {
    if (n == 1 || n == 0) {
        return console.log(n, "is not prime number")
    }
    let i = 2
    while (i < n) {
        if (n % i === 0) {
            return console.log(n, "is not prime number")
        }
        i++
    }
    return console.log(n, "is Prime number")
}
// isPrime(n)

// ==========================================================

// Q.2  Write a programe to print all the prime no from 1 to n

function primeNum(n) {
    if(n == 1 || n == 0) {
        return console.log(n, "is not Prime number")
    }
    for (let i = 2; i <= n; i++) {
        let count = 0
        for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
                count++;
            }
        }
        if (count === 2) {
            console.log(i, "is prim number")
        }
    }
}

// primeNum(n)
// ==========================================================

//Q3. write a programe to Swap 2 Number?
 function swap(x,y){
    console.log("Before swaping x:",x, "and Y:",y)
      let tem = x
           x = y
           y = tem
    console.log("After swaping x:",x,"and Y:",y)
 }
// swap(88,56)

// write a programe to print the digit of number.
function digit (n) {
    n = Math.abs(n) //convert negative value to positive
    let digit;
  while(n!=0){
      digit = n % 10;
      n=Math.floor(n/10);
      console.log("digit",digit)
  }
  }

// digit(n)

// ==========================================================

// Q4.Write a programme to reverse a no of A NO.

function reverse (n){
    n = Math.abs(n)
    console.log("Number is ",n)
    let rev = 0;
   while(n<0){
     let rem = n%10;
         rev = rev*10+rem;
         n = Math.floor(n/10)
   }
   console.log("Reverse number is ",rev)
}

// reverse(n)

// ==========================================================

// Q5. write a programme to print armstrng number

function armstrong(n){
    n = Math.abs(n)
    let num = n
    let num1 = n
    let digit;
    let sum = 0;
    let count = 0;
    while(num>0){
        digit = num%10
        num = Math.floor(num/10)
        count++;
    }
    while(num1>0){
         digit = num1 % 10;
         sum += digit    ** count;
         console.log(sum)
         num1 = Math.floor(num1/10)
    }
      if(sum === n){
        console.log(`The Number ${n} and Armstrong claulation ${sum} both are equal armstrong number`)
      }else {
        console.log(`The Number ${n} and Armstrong claulation ${sum} both are NOT equal its Not armstrong number`)
      }
}
// armstrong(n)

// ==========================================================

// Q6. write a programme to print enter no is palindrome or not?

function palindrome(n){
    let num = n
    let rev = 0;
    let digit;
   while(num>0){
     let digit = num%10;
         rev = rev * 10 + digit;
         num = Math.floor(num/10)
   }
     if(n===rev){
        console.log(rev,"It is Palindrome number")
     }else {
        console.log(n,"it not a Palindrome number")
     }
}

// palindrome(n)

// ==========================================================

// Q7. write a programe to print enter number is perfect number or not
function perfectNum(n){
    let sum=0
    for(let i = 1; i<n; i++){
        if(n % i === 0){
         sum += i;
        }
    }
    if(sum === n){
        console.log(sum,"is perfect number");
    }else{
        console.log(n,"is not perfect number")
    }
}
// perfectNum(n)

// ==========================================================
        //   Home Work
// ==========================================================

// Q.1.write a programme to Print the multiplication table of a given number?
   function Table (n){
     for(let i = 1; i<=10; i++){
        let tab = n * i
        console.log(n +"*"+i+"="+tab)
     }
   }
//    Table(n)

// ==========================================================
// 2. Count the number of odd and even digits in a given number.
function EvenOddCount(n){
    let evenCount = 0;
    let oddCount = 0;
     for(let i = 1; i<=n;i++){
        if(Math.floor(i/2)===i/2){
            console.log(i,": Even number")
            evenCount++;
        }else{
             console.log(i,": Odd number")
             oddCount++;
        }
     }
     console.log(`Total even number : ${evenCount} and Odd number : ${oddCount}`)
}
// EvenOddCount(n)
// ==========================================================
// 3. Write a programe to Check whether a given number is a power of 2.
  function Power(n){
    if(n <= 0){
        return false
    }
     let num = n
     while(n % 2 === 0){
        n = n / 2
     }
      if(n === 1){
            console.log(num,"is power of 2")
        }else{
            console.log(num,"n is not Power of 2")
        }
  }
//   Power(n)
// ==========================================================
// 4. Check whether a given number is a Strong Number.
// (A number is Strong if the sum of factorials of its digits is equal to the number itself.)
  function StrongNum (n){
       let num = n;
       let fact = 1
       let sum = 0
       while(num>0){
         let digit = num%10
         for(let i = 2; i<=digit; i++){
            fact *= i
            console.log("f",fact)
          }
          sum += fact
          console.log("sum",sum)
          num = Math.floor(num/10)
          fact = 1
       }
       if(n === sum){
        console.log(sum,"This is strong number")
       }else {
        console.log(n, "This is not strong number")
       }
  }
//   StrongNum(n)
// ==========================================================
// 5. Find the factorial of a given number.
function Factorial(n){
      let fact = 1
      for(let i = n; i >= 1; i--){
          fact *= i 
      }
      console.log("Factorial of ",n,"is ",fact)

}
// Factorial(n)
// ==========================================================
// 6. Print the Fibonacci series up to N terms.
function FiboneciSeries(n){
      let a = 0 ;
      let b = 1;
      let sum  = 0
      console.log(a)
      console.log(b)
      sum = a + b; 
      for( let i = 1; i <= n; i=sum){  
       console.log(sum)  
        a = b ;
        b = sum 
        sum = a + b
      }
   }
//    FiboneciSeries(n)
// ==========================================================
// 7. Find the LCM and HCF (GCD) of two given numbers.
  function LCM (a,b){
       if( a==0 || b==0){
        return console.log("plese input right number")
       }
     let max = (a>b) ?  a : b;
     while(true){
        if(max %  a === 0 && max % b ===0){
            return console.log("Lcm is ",max)
     }
     max++
  }
}
    //   LCM(88,44)

    // -----------------------------------------------------------------

      function HCF(x,y){
        let gcd = 0
          for(let i = 1; i <= x && i <= y; i++){
            if(x % i === 0 && y % i ===0){
                gcd = i;
            }
          }
          return console.log("HCF is ",gcd)
      }
//    HCF(88,44)

// Q8. find factorial using recursive  function?

   function factorial(n){
      if(n === 1 || n === 0){
        return 1
      }
      return n * factorial(n-1)
   }

// console.log(factorial(n))

// Q 9. write a programme to print reverse number by the help of recursive function?
  function reverse(n, rev = 0){
    if(n === 0) return rev
    return reverse(
        Math.floor(n/10),
        rev * 10 + (n%10)
    )
  }
//   console.log(reverse(98765))
 
// =======================================End==========================================


function mergeArray(arr1, arr2){
    let newArr= []
    let m = arr1.length + arr2.length;
    for(let i = 0; i <= (m-1) ; i++){    
         if( i < arr1.length){
            newArr[i] = arr1[i]
         }else{
            newArr[i] = arr2[i-arr1.length]
         }
    }
    return newArr
}

// function moveZero(arr) {
//     let j = 0;
//     for (let i = 0; i < arr.length; i++) {
//         // non zero element ko swap karungo j index vale element se 
//         if (arr[i] !== 0) {
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//             j++;
//         }
//     }
// }

// let arr = [0, 3, 0, 8, 11, 0, 7, 9, 67, 8, 0, 0, 7, 0, 0, 0]
// console.log("Orginal Array", arr);
// moveZero(arr);
// console.log("After move zero, array is", arr);


// let Arr1 = [1, 2, 4];
// let Arr2 = [5, 6, 7]
// // o/p->[1,2,4,5,6,7]

// const newArr = [...Arr1, ...Arr2];
// console.log("new ", newArr)


// function mergeTwoArray() {
//     let index = 0;
//     let arr1 = [1, 2, 3];
//     let arr2 = [4, 5, 6];
//     let newArr = []
//     // 1st array ko copy karo 
//     for (let i = 0; i < arr1.length; i++) {
//         newArr[index] = arr1[i];
//         index++
//     }
//     for (let h = 0; h < arr2.length; h++) {
//         newArr[index] = arr2[h];
//         index++
//     }
//     console.log(newArr)
// }
// shortTwoArray()

// T.C O(N)+O(N)=O(N)
// S.C=O(N)


function mergeTwoArray() {
    let index = 0;
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];
    let totalSize = (arr1.length + arr2.length)

    for (let i = 0; i < totalSize; i++) {
        if (i < 3) {
            continue

        }
        if (index < totalSize)
            arr1[i] = arr2[index++];

    }
    console.log(arr1)
}
mergeTwoArray()

// T.C O(N)
// S.c O(1)



let x = [1,2,3,4]
let y = [5,6,7,8]

let newArr = mergeArray(x,y)
console.log(newArr)