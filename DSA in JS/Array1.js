// Linear Serch :- Linear Search is a searching algorithm that checks each element of an array sequentially from the beginning until the target element is found or the array ends.
// Key Point
// Works on both sorted and unsorted arrays.

// ==================================================================
// write a Programe to Find index of target element using Linear Search?

function linearSearch(arr, size, target) {
    if (size === 0) {
        return -1
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return -1
}
let arr = [1, 28, 13, 42, 68, 11]
// console.log(arr)
// let m = linearSearch(arr,4,1);
// console.log("Target Element Index is:",m)

// ==================================================================
// write a Programe to Sort Array using Bubble Sort?

function bubbleSort(arr) {
    let temp;
    for (let i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j]
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
            }
        }
    }
    return arr
}
//  let z = bubbleSort(arr)
//  console.log(z)

// ==================================================================
// write a Programe to Swap alternat Element?

function swapAlternateElement(arr) {
    let temp;
    for (let i = 0; i < arr.length; i += 2) {
        if (i + 1 < arr.length) {
            temp = arr[i]
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
    console.log(arr)
}
// swapAlternateElement(arr)
// ==================================================================
// write a Programe to Swap every Element?
function swapEveryElement(arr) {
    let temp;
    for (let i = 0; i < arr.length; i++) {
        if (i + 1 < arr.length) {
            temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
    console.log(arr)
}
//    swapEveryElement(arr)
// ==================================================================
// write a Programe to Add Element at first index?

function addElementAtFirstIndex(arr, element) {
    let n = arr.length
    for (let i = n; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = element;
    console.log(arr)
}
// let element = 8
// addElementAtFirstIndex(arr,element)

// ==================================================================
// write a Programe to Add Element at any index?

function addElementAtanyIndex(arr, index, element) {
    let n = arr.length;
    for (let i = n; i > index; i--) {
        arr[i] = arr[i - 1];
    }
    arr[index] = element
    console.log(arr)
}

// addElementAtanyIndex(arr,3,32)

// ==================================================================
// write a Programe to Shift Element of array at First index passing any index?

function shiftElementAtFirstIndex(arr, index) {
    let element = arr[index];
    for (let i = index; i > 0; i--) {
        arr[i] = arr[i - 1]
    }
    arr[0] = element
    console.log(arr)
}
// shiftElementAtFirstIndex(arr,3)

// =======================================================================================

// Binary Search Algorithm :- Binary Search is a searching algorithm that works on a sorted array and finds the target element by repeatedly dividing the search space into half.
// Time Complexity
// Best Case:	    O(1)
// Average Case:	O(log n)
// =======================================================================================

function BinarySearch(arr, targetElement) {
    let strIndex = 0;
    let lstIndex = arr.length - 1;
    while(strIndex<=lstIndex){
        let mid = Math.floor((strIndex + lstIndex)/2);
        if(arr[mid] === targetElement){
            return mid;
        }else if(arr[mid] < targetElement){
             strIndex = mid + 1;
        }else{
            lstIndex = mid - 1;
        }
    }
    return -1;
}
let arr1 = [12,13,14,16,42,78,90,100]
// let b = BinarySearch(arr1, 90);
// console.log(b)

// =======================================================================================
// write a Programe to find a frequency of each Element in a Array?
function frequencyOfArray(arr){
    let freq = {};
    let fi = []
    for(let i = 0; i<arr.length; i++){
        if(freq[arr[i]]!==undefined){
            freq[arr[i]] += 1 
        }else {
           freq[arr[i]] = 1
        }
    }
    console.log(freq)
    let ans = Object.values(freq)
    console.log(ans)
}
let arr2 = [1,2,3,2,3,1,4,5]
frequencyOfArray(arr2)

// =======================================================================================
// write a Programe to check Array isSorted or not in a Array?

function isSorted(arr){
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] > arr[i + 1]){
             return false;
        }
    }
    return true;
}
let arr4 = [0,1,2,4,5,6,7,8,9]
let Sorted = isSorted(arr4)
console.log(Sorted);

//=============================END========================================================