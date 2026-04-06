let arr = [12,21,13,31,14,15,14,12,42,12,42];
// console.log(arr)
// Update Element :-
// arr[5]=51
// console.log(arr)
// EdgeCase-1 :-
//   let arr0= []
//   console.log(arr0) 
// ====================================================================
  // EdgeCase-2 :-
//   let arr1= [12,45,45]
//   console.log(arr1.length) //3
  //Modify the array:-
//   arr1 = []
//   console.log(arr1[4])  //undefine
//   arr1.length=0
//    console.log(arr1.length)  //0
// ====================================================================
//    Edge Case 3:-
//  let arr2 = [12,34,56,78]
// console.log(arr2);

// arr2[2]=undefined;
// arr2[4]=null;
// console.log(arr2)
// console.log(arr2.length)
// ====================================================================
// give the anser of tis programme ?
 let a = [1,2,3,45];
 let b = a
  b [4]  = 5 
  console.log(a) //not copy referenc same memory location point both Output same
  console.log(b)  

// ====================================================================
// write a Programme to Print all Element Of an Array?
function printArrayElement(arr){
    for(let i = 0; i<arr.length;i++){
        console.log(arr[i])
    }
}
// printArrayElement(arr)

// ====================================================================
// write a Programme to Print 3 multiply in every Element Of an Array?
 function multipleOfArray(arr,mul){
    for(let i = 0; i<arr.length; i++){
        arr[i]=arr[i]*mul
    }
    console.log("updated Array :",arr)
}
let c = [1,2,3,45];
// multipleOfArray(c,2)

// ====================================================================
// write a Programme to print all the even value of array ?

function evenOddArray(arr){
      let even = [];
      let odd = [];
      let count = 0
      let oddCount = 0
    for(let i = 0; i<arr.length; i++){
        if(arr[i] % 2 === 0){
            even[count] = arr[i]
            count++
        }else{
            odd[oddCount]=arr[i]
            oddCount++
        }
    }
        console.log("Even Array :",even);
        console.log("Odd Array :", odd)
}
evenOddArray(arr)
// ====================================================================
// write a Programme to print sum of ALL Elements of array ?
 function sumArray(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    console.log("Sum of an Array :",sum)
 }
 sumArray(arr)
 // ====================================================================
// write a Programme to print Minimum and Maximum Element of array ?

function minMaxElementInArr(arr){
    let max = -Infinity;
    let min = +Infinity;
    for(let i = 0; i<arr.length; i++){
        if(max < arr[i]){
            max = arr[i]
        }
         if(min > arr[i]){
            min = arr[i]
    }
}
      console.log("Maximum Element is : ",max)
      console.log("Minimum Element is : ",min)
}
// minMaxElementInArr(arr)
console.log(arr)

// ====================================================================
// write a Programme to reverse Element of array ?

function reverseArray(arr){
    let temp = 0;
    let strIndex = 0;
    let lstIndex = arr.length -1
     while( strIndex < lstIndex){
         temp = arr[strIndex];
         arr[strIndex]= arr[lstIndex]
         arr[lstIndex] = temp
         strIndex++;
         lstIndex--;
     }
     console.log(arr)
}
reverseArray(arr);

// ====================================================================
// write a Programme to sort Element of array ?

 function Sort(arr){
    let temp ;
    for(let i = 0; i<arr.length; i++){
        for(let j = i ; j<arr.length; j++){
            if(arr[i] > arr[j+1]){
               temp = arr[i]
               arr[i] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
 }
 let z = Sort(arr)
 console.log(z)

// ========================================END============================================
