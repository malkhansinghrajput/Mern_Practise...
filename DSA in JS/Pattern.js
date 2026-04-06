// write a programe to print below Pattern?

/*
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *

1 1 1 1 1
1 1 1 1 1
1 1 1 1 1
1 1 1 1 1
1 1 1 1 1

1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
*/
function simplePattern(row, col) {
    let ans = ""
    for (let i = 0; i < row; i++) {
        for (let j = 1; j <= col; j++) {
            //  ans += "*" + " "
            // ans += 1 + " "
            ans += j + " "
        }
        console.log(ans)
        ans = ""
    }
}
// simplePattern(5,5)

// =========================================================================

// wap to print below pattern or number Pyramid?
/*

1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

1 
2 2 
3 3 3
4 4 4 4
5 5 5 5 5

*/

// *
// * *
// * * *
// * * * *
// * * * * *

function simplePyramid(row) {
    for (let i = 1; i <= row; i++) {
        let ans = "";
        for (let j = 1; j <= i; j++) {
            // ans += j + " "
            // ans += "*" + " "
            // ans += 1 + " "
            ans += i + " "
        }
        console.log(ans)
    }
}

// simplePyramid(5)

// =========================================================================

// write a programmer to print Inverted Pyramid below pattern?

/*
* * * * * * 
* * * * * 
* * * *
* * *
* *
*

1 2 3 4 5 6 
1 2 3 4 5 
1 2 3 4
1 2 3
1 2
1

8 8 8 8 8 8 
8 8 8 8 8 
8 8 8 8
8 8 8
8 8
8
*/

function InvertedPyramid(row) {
    let ans = "";
    for (let i = 0; i < row; i++) {
        ans = "";
        for (let j = 1; j <= row - i; j++) {
            // ans += "*" + " "
            //  ans += j + " "
            ans += 8 + " "
        }
        console.log(ans)
    }
}
// InvertedPyramid(6)

// =========================================================================

// write a programmer to print Flipped Simple Pyramid below pattern?

// - - - - *
// - - - * *
// - - * * *
// - * * * *
// * * * * *

//          5
//        5 4
//      5 4 3
//    5 4 3 2
//  5 4 3 2 1

//          1
//        1 2
//      1 2 3
//    1 2 3 4
//  1 2 3 4 5

// - - - -  1
// - - -  1 2
// - -  1 2 3
// -  1 2 3 4
//  1 2 3 4 5


function simpleFlippedPyramid(row) {
    let ans = ""
    for (let i = 1; i <= row; i++) {
        ans = "";
        for (let space = i; space < row; space++) {
            ans += "- "
            //  ans += "  "
        }
        //   for(let j = row; j > row - i; j--){
        //     // ans += " " + "*";
        //     ans =ans + " "+ j ; 
        //   }
        for (let j = 1; j <= i; j++) {
            // ans += " " + "*";
            ans = ans + " " + j;
        }
        console.log(ans)
    }
}

// simpleFlippedPyramid(5)



// =========================================================================

// write a programmer to print Inverted Fliped Pyramid below pattern?

/**
 
* * * * *
  * * * *
    * * *
      * *
        *
   
1 2 3 4 5
  1 2 3 4
    1 2 3
      1 2
        1

1 1 1 1 1 
  1 1 1 1 
    1 1 1
      1 1
        1
 */

function invertedFlippedPyramid(row) {
    let ans = "";
    for (let i = 0; i < row; i++) {
        for (let k = row; k > row - i; k--) {
            ans += "  "
        }
        for (let j = 1; j <= row - i; j++) {
            ans += "* "
            //  ans += j
            //  ans += 1 + " "
        }
        console.log(ans)
        ans = ""
    }
}

// invertedFlippedPyramid(5)

// ========================================================================

// write a programmer to print Triangle below pattern?

/*
    * 
   * * 
  * * *
 * * * *
* * * * *

    1 
   1 2 
  1 2 3
 1 2 3 4
1 2 3 4 5

    1 
   2 2 
  3 3 3
 4 4 4 4
5 5 5 5 5

    8 
   8 8 
  8 8 8
 8 8 8 8
8 8 8 8 8

*/
function trianglePattern(row) {
    for (let i = 1; i <= row; i++) {
        let ans = "";
        for (let space = 1; space <= row - i; space++) {
            ans += " "
        }
        for (let j = 1; j <= i; j++) {
            ans += "*" + " "
            //   ans += j + " "
            // ans += i + " "
            // ans += 8 + " "
        }
        console.log(ans);
    }

}

// trianglePattern(5)

// ========================================================================

// write a programmer to print Inverted Triangle below pattern?

/*
* * * * * 
 * * * * 
  * * *
   * *
    *

1 2 3 4 5 
 1 2 3 4 
  1 2 3
   1 2
    1

1 1 1 1 1 
 2 2 2 2 
  3 3 3
   4 4
    5

8 8 8 8 8 
 8 8 8 8 
  8 8 8
   8 8
    8

*/
function reverseTrianglePattern(row) {
    let m = 0;
    for (let i = 1; i <= row; i++) {
        let ans = "";
        for (let space = 1; space < i; space++) {
            ans += " "
        }
        for (let j = 1; j <= row - m; j++) {
            ans += "*" + " "
            //   ans += j + " "
            // ans += i + " "
            // ans += 8 + " "
        }
        m++;
        console.log(ans);
    }

}

// reverseTrianglePattern(5)

// ========================================================================

// write a programmer to print BigTriangle below pattern?

/*
          * 
        * * * 
      * * * * *
    * * * * * * *
  * * * * * * * * *
* * * * * * * * * * *

          1 
        1 2 3 
      1 2 3 4 5
    1 2 3 4 5 6 7
  1 2 3 4 5 6 7 8 9
1 2 3 4 5 6 7 8 9 10 11

          1 
        2 2 2 
      3 3 3 3 3
    4 4 4 4 4 4 4
  5 5 5 5 5 5 5 5 5
6 6 6 6 6 6 6 6 6 6 6

          8 
        8 8 8 
      8 8 8 8 8
    8 8 8 8 8 8 8
  8 8 8 8 8 8 8 8 8
8 8 8 8 8 8 8 8 8 8 8

*/
function bigTrianglePattern(row) {
    for (let i = 1; i <= row; i++) {
        let ans = "";
        for (let space = 1; space <= row - i; space++) {
            ans += "  "
        }
        for (let j = 1; j < i + i; j++) {
            // ans += "*" + " "
            // ans += j + " "
            //  ans += i + " "
            ans += 8 + " "
        }
        console.log(ans);
    }

}

// bigTrianglePattern(6)

// ========================================================================

// write a programmer to print reveseBigTriangle below pattern?

/*
* * * * * * * * * * * 
  * * * * * * * * * 
    * * * * * * *
      * * * * *
        * * *
          *

1 2 3 4 5 6 7 8 9 10 11 
  1 2 3 4 5 6 7 8 9 
    1 2 3 4 5 6 7
      1 2 3 4 5
        1 2 3
          1

1 1 1 1 1 1 1 1 1 1 1 
  2 2 2 2 2 2 2 2 2 
    3 3 3 3 3 3 3
      4 4 4 4 4
        5 5 5
          6

8 8 8 8 8 8 8 8 8 8 8 
  8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8
      8 8 8 8 8
        8 8 8
          8

*/
function reverseBigTrianglePattern(row) {
    let count = row
    for (let i = 1; i <= row; i++) {
        let ans = "";
        for (let space = 1; space < i; space++) {
            ans += "  "
        }
        for (let j = 1; j <= (row + count) - i; j++) {
            // ans += "*" + " "
            // ans += j + " "
            //  ans += i + " "
            ans += 8 + " "

        }
        count--
        console.log(ans);
    }

}

// reverseBigTrianglePattern(6)

// ========================================================================

// write a programmer to print Diamond Pattern below pattern?

/*
    * 
   * * 
  * * *
 * * * *
* * * * *
 * * * *
  * * *
   * *
    *
*/

function FullDiamond(row) {
    // Upper triangle
    for (let i = 1; i <= row; i++) {
        let ans = "";
        for (let space = 1; space <= row - i; space++) {
            ans += " "
        }
        for (let j = 1; j <= i; j++) {
            ans += "*" + " "
            //   ans += j + " "
            // ans += i + " "
            // ans += 8 + " "
        }
        console.log(ans);
    }

    // reverse
    for (let i = 1; i < row; i++) {
        let ans1 = "";
        for (let space = 1; space <= i; space++) {
            ans1 += " "
        }
        for (let j = 1; j <= row - i; j++) {
            ans1 += "*" + " "
            //   ans1 += j + " "
            // ans1 += i + " "
            // ans1 += 8 + " "
        }
        console.log(ans1);
    }
}

// FullDiamond(5)

// ========================================================================

// write a programmer to print Half Diamond Pattern below pattern?
/*
* 
* * 
* * * 
* * * * 
* * * * * 
* * * * 
* * * 
* *
*
*/

function halfDiomondPattern(row) {
    for (let i = 1; i <= row; i++) {
        let ans = ""
        for (let j = 1; j <= i; j++) {
            ans += "*" + " "
        }
        console.log(ans)
    }
    for (let i = row - 1; i > 0; i--) {
        let ans1 = ""
        for (let k = 1; k <= i; k++) {
            ans1 += "*" + " "
        }
        console.log(ans1)
    }

}


// halfDiomondPattern(5)

// ========================================================================

// write a programmer to print Half Flipped Diamond Pattern below pattern?
/*
        * 
      * * 
    * * *
  * * * *
* * * * *
  * * * *
    * * *
      * *
        *
*/

function halfFlipedDiomondPattern(row) {
    for (let i = 1; i <= row; i++) {
        let ans = ""
        let space1 = ""
        for (let space = 1; space <= row - i; space++) {
            space1 += "  "
        }
        for (let j = 1; j <= i; j++) {
            ans += "*" + " "
        }
        console.log(space1 + ans)
    }
    //  bellow
    for (let i = 1; i < row; i++) {
        let ans1 = ""
        let space2 = ""
        for (let spce = 1; spce <= i; spce++) {
            space2 += "  "
        }
        for (let k = 1; k <= row - i; k++) {
            ans1 += "*" + " "
        }
        console.log(space2 + ans1);
    }

}
// halfFlipedDiomondPattern(5)

// ========================================================================

// write a programmer to print Butter Fly Pattern below pattern?
/*

*              *
* *          * *
* * *      * * *
* * * *  * * * *
* * *      * * *
* *          * *
*              *

*        *
* *      * *
* * *    * * *
* * * *  * * * *
* * *    * * *
* *      * *
*        *

*/

function butterFly(row) {
    // Upper Part
    for (let i = 1; i <= row; i++) {
        let ans = "";
        let ans1 = "";
        let space = "";
        for (let j = 1; j <= i; j++) {
            ans += "* " 
        }
        for (let spc = 2 + i; spc <= row * 2 + 1 - i; spc++) {
            space += "  "
            //  space += " "
        }
        for (let j = 1; j <= i; j++) {
            ans1 += " *"
        }
        console.log(ans + space + ans1)
    }
    // below pattern 
    for (let i = 1; i < row; i++) {
        let ans = "";
        let ans1 = "";
        let space = "";
        for (let j = 1; j <= row - i; j++) {
            ans += "* " ;
        }
        for(let spc = 1 ; spc <= (i*2); spc++){
             space += "  "
            // space += " "
        }
        for(let k = 1; k <= row - i; k++){
            ans1 += " *"
        }
        console.log(ans + space + ans1)
    }
}

// butterFly(4)

// ========================================================================

// write a programmer to print Number Pyramid Or Rotated Number Pyramid Pattern below pattern?

/*
1 
2 3 
3 4 5
4 5 6 7
5 6 7 8 9
*/

function NumPyramid(row){
    for(let i = 1; i<= row; i++){
        let ans = "";
        for(let j = i; j< i+i  ; j++){
            ans += j + " " 
        }
        console.log(ans)
    }
}

// NumPyramid(5)
/*
        1
      2 3
    3 4 5
  4 5 6 7
5 6 7 8 9

    1
   2 3
  3 4 5
 4 5 6 7
5 6 7 8 9

*/
function rotateNumPyramid(row){
    for(let i = 1; i<= row; i++){
        let ans = "";
        let space = "";
        for(let spc = 1; spc <= row-i; spc++){
            space += "  "
            // space += " "
        }
        for(let j = i; j< i+i  ; j++){
            ans += j + " " 
        }
        console.log(space+ans)
    }
}

// rotateNumPyramid(5)

// ========================================================================

// write a programmer to print Pallindrome triangle Pattern below pattern?

/*
         1
       2 3 2
     3 4 5 4 3
   4 5 6 7 6 5 4
 5 6 7 8 9 8 7 6 5

*/
function pallindromTriangle(row){
    for(let i = 1; i<= row; i++){
        let ans = "";
        let space = "";
        for(let spc = 1 ; spc <= row - i; spc++){
            space += "  ";
        }
        for(let j = i ; j< i+i; j++){
            ans += " "+j 
        }
        for(let l = i - 2; l>=0 ; l--){
            ans += " " + (i + l) 
        }
        console.log(space+ans)
        
    }
}

pallindromTriangle(5)

/*

   1
  232
 34543
4567654

*/

function pallindromTriangle2() {
    let ans = ""
    let space = ""
    let print = ""
    let count = 0;
    for (let i = 1; i <= 4; i++) {

        for (let k = 4; k > i; k--) {
            space += " "
        }

        for (let j = 1; j <= i; j++) {
            ans += j + count
        }
        for (let l = i - 2; l >= 0; l--) {
            ans += i + l;
        }
        count = i
        console.log(space + ans)
        print = ""
        ans = ""
        space = ""
    }

}

pallindromTriangle2()

// ===========================================================================