// write a Programe to swap all 0 element at last Index in Array?
function swapZero(arr) {
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            let temp = arr[i]
            arr[i] = arr[index]
            arr[index] = temp
            index++;
        }
    }
     console.log(arr)
}
//  swapZero([0,0,0,2,1,0,2,0])

// ===============================================================================
// write a Programe to Merge Two Array without using spread or builtIn Method?
function mergeTwoArray(arr1, arr2) {
    let newArray = [];
    let n = arr1.length
    for (let i = 0; i < arr1.length; i++) {
        newArray[i] = arr1[i]
    }
    for (let j = 0; j < arr2.length; j++) {
        newArray[n] = arr2[j]
        n++
    }
    return newArray;
}
let arr = [11, 12, 13, 14, 15]
let arr1 = [21, 22, 23, 24, 25]
// let merg = mergeTwoArray(arr,arr1)
// console.log(merg)

// ===============================================================================
// write a Programe to print the elment's sum is equql to the the target Sum?

function sumTwoElement(arr, targetSum) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] + arr[j] === targetSum) {
                return { x: arr[i], y: arr[j] }
            }
        }
    }
    return { x: -1, y: -1 }
}

// let sum = sumTwoElement(arr1, 46);
// console.log(sum)

// ===============================================================================
// write a Programe to reverse the array element from the index that pass in function argument?
   function reverseByIndex( arr, index){
       let str = index + 1;
       let end = arr.length - 1
      
       while(str <= end){
        let temp = arr[str];
            arr[str] = arr[end]
            arr[end] = temp
            str++; end--;
       }
          console.log(arr) 
   }
//    console.log(arr)
//    reverseByIndex(arr,2)

// ===============================================================================
// write a Programe to Find Missing Element in array?

function missingElement(arr){
    let sum = 0;
    let sum1 = 0
    let n = arr[arr.length - 1]
  for(let i = 1; i<=n; i++){
      sum += i;
  }
  for(let j = 0; j < arr.length; j++){
       sum1 += arr[j]
  }

  let  misingElement = sum - sum1
      console.log("Missing Element :",misingElement)
}
// let arr3 = [1,2,3,4,5,6,8,9,10]
// missingElement(arr3)

// ===============================================================================

// write a Programe to find the frequency of each element in array?

function frequencyElement(arr){
    let freq = {}
    for(let i = 0; i < arr.length; i++){
        if(freq[arr[i]] !== undefined){
            freq[arr[i]] += 1
        }else{
            freq[arr[i]] = 1;
        }
    }
    for(let key in freq){
        console.log(key)
    }
    console.log(freq)
}
let arr2 = [1,2,1,3,4,5,6,7,7,5,5,3,2,4,5,6,4,3,2,3,33,]
frequencyElement(arr2)

// ===============================================================================

// write a Programe Second Aproch to find a unique value in Array?

function 

// ===============================================================================

function findOddSum(arr) {
    let firstMax = -Infinity;
    let secondMax = -Infinity;
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        if(arr[i] % 2 !== 0){
            if (arr[i] > firstMax) {
            secondMax = firstMax
            firstMax = arr[i];
        } else if (secondMax > arr[i]) {
            secondMax = arr[i]
        }
        
        }
        sum = secondMax + firstMax;
        console.log(sum)
}

// let arr5 = [2, 4, 7, 13, 14]
// findOddSum(arr5)


// =====================
function pairSum(arr3) {

    let maxSum = 0;
    let ans = [];

    for (let i = 0; i < arr3.length; i++) {
        let Sum = 0;

        for (let j = i + 1; j < arr3.length; j++) {

            Sum = arr3[i] + arr3[j]

            if (Sum % 2 != 0 && Sum > maxSum) {

                maxSum = Sum;
                ans[0] = arr3[i];
                ans[1] = arr3[j]

            }
        }
    }

    console.log(ans, maxSum)
}
// let arr3 = [1,2,3,4,5]
// pairSum(arr3)

// =============================================

    // for (let i = 0; i < arr3.length; i++) {
    //     let Sum = 0;
    //     for (let j = i + 1; j < arr3.length; j++) {
    //         // console.log(arr3[i], arr3[j])// ye pair hai 
    //         Sum = arr3[i] + arr3[j]
    //         //  get the sum of pair which is not event
    //         if (Sum % 2 != 0 && Sum > maxSum) {

    //             maxSum = Sum;
    //             ans[0] = arr3[i];
    //             ans[1] = arr3[j]


    //             // console.log(arr3[i], arr3[j])// odd sum dene vale pair
    //         }
    //     }
    
    // let op=Math.floor(maxSum/2)
    // let b=maxSum-op;
    // console.log(op,b)
    // console.log(ans, maxSum)
// }

// let arr4 = [1, 2, 3, 4, 5];
// pairSum(arr4);