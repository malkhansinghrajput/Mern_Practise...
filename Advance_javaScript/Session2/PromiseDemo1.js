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



console.log("============ Start===========")
category()
    .then((catname) => {
        console.log("Category Name is:", catname)
        return categoryProducts(catname)
    })
    .then((prods) => {
        console.log("Category Products", prods)
        return selectProducts(prods)
    })
    .then((prod) => {
        console.log("Selected Product:",prod)
        return selectProductBrand(prod)
    })
    .then((brands) => {
        console.log("Product Brands:",brands)
    })
    .catch((err) => {
        console.log(err)
    })
console.log("============ Stop===========")
