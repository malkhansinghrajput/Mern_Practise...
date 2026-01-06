function category(catname) {
    return new Promise((resolve, reject) => {
        if (catname != undefined) {
            resolve(catname)
        } else {
            reject("Category not selected")
        }
    })
}
function categoryProducts(catname) {
    return new Promise((resolve, reject) => {
        if (catname === "Men's") {
            var arrProd = ["TShirt", "Jeans", "Sport Shoes", "Watch"]
            resolve(arrProd)
        } else {
            reject("Category Product not Available")
        }
    })
}

function selectProducts(prodlist) {
    return new Promise((resolve, reject) => {
        if (prodlist!=undefined) {
            resolve(prodlist[2])
        }else{
            reject("Products Not Found")
        }
    })
}
function selectProductBrand(prod) {
    return new Promise((resolve, reject) => {
        if (prod!=undefined) {
            var arrBrands = ["Adidas", "Nike", "Puma", "Woodland", "Red Chief"]
            resolve(arrBrands)
        } else {
            reject("Product Brand Not Found")
        }
    })
}
//'await' expressions are only allowed within async functions and at the top levels of modules
async function getData(){
   try {
    var catname = await category("Men's")
    console.log("Category Name is:", catname)
    var prods = await categoryProducts(catname)
    console.log("Category Products", prods)
    var prod = await selectProducts(prods)
    console.log("Selected Product:",prod)
    var brands = await selectProductBrand(prod)
    console.log("Product Brands:",brands)
   } catch (error) {
        console.log(error)
   } 
}
console.log("============ Start===========")
getData()
console.log("=========== Stop  ===========");
