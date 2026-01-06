/**
 * Callback Hell refer to the situation in javaScript where multiple nested callback create complex, deeply indented code, often called the "pyramid of doom." this structure makes the code difficult to read, debug, and maintain, resulting in poor code quality and scalability issues.
 */

function category(catname,callback){
       setTimeout(() => {
        callback(catname)
       },2000)
}

function categoryProducts(catname,callback){
    setTimeout(()=> {
        if(catname==="Men's") {
            var arrprod = ["T-Shirt","Jeans","Sport-Shoes", "Watch"]
            callback(arrprod)
        }
    },2000)
}
function selectProducts(prodlist,callback) {
    setTimeout(() => {
        if(prodlist != undefined) {
             callback(prodlist[2])
        }
    },2000)
}
function selectProductBrand(prod,callback) {
    setTimeout(()=> {
        var arrBrands = ["Adidas","Nike","Puma","Woodland","Red Chief"]
        callback(arrBrands)
    },2000)
}

console.log("===============Start==============")
category("Men's",function(catname){
    console.log("Category name is : ",catname)
    // callng categoryProducts
     categoryProducts(catname,function(prods){
        console.log("Category Products",prods)
        //calling selectProducts
        selectProducts(prods,function(prod){
            console.log("selected Product:",prod)
            //calling selectProductBrand
            selectProductBrand(prod,function(brands){
                console.log("Product Brands:",brands)
            })
        })
     })
})
console.log("===============Stop===============")