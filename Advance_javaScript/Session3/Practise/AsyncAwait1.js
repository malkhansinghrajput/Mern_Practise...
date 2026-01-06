function category (catname) {
       return new Promise((resolve,reject) => {
              if(catname!=undefined){
                     resolve(catname)
              }else {
                     reject("Category not Selected")
              }
       })
}
function categoryProducts(catname){
       return new Promise((resolve,reject) => {
              if(catname !=undefined){
              var arrprod = ["T-shirt", "Jeans","SportShoes","Watch"]
              resolve(arrprod)
              }else {
                     reject("Category Product Nt Available")
              }
       })
}

function selectedProducts(prodlist) {
       return new Promise((resolve,reject) => {
              if(prodlist!=undefined){
              resolve(prodlist[2])
              }else{
                     reject("Product Not Found")
              }
       })
}
function selectProductBrand(prod) {
       return new Promise((resolve,reject) => {
              if(prod!=undefined){
                  var arrBrands= ["nike","Rebook","Adidas","Red Chief"]
                    resolve(arrBrands)
              }else{
                     reject("Product Brand Not Found")
              }
       })
}
// 'Await' expression are only allowed within async function and at the top levels of modules 
async function getData(){
       try {
        var catname = await category("Men's")
        console.log("Category Name is : ",catname)
        var prods = await categoryProducts(catname)
        console.log("Category Product :",prods)
        var prod = await selectedProducts(prods)
        console.log("Selected product : ", prod)
        var brands = await selectProductBrand(prod)
        console.log("Product Brand : ",brands)
       } catch (error) {
              console.log(error)
       }
}

console.log('===========Start============')
getData()
console.log("===========Stop=============")