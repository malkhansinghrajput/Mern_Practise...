import express from "express";
import ejs from 'ejs'
import indexRouter from './routes/indexRouter.js'
import customerRouter from './routes/customerRouter.js'
/*
Creates an Express application. The express() function is a top-level function exported by the express module.
*/

const app = express()
const port = 3000

app.engine("html",ejs.renderFile)

// Application level midlevere

app.use((req,res,next) => {
       console.log("Application-level midlewere")
       next()
})
// for particular route
app.use("/contact",(req,res,next) => {
       console.log("Application-level midlewere 1")
       next()
},(req,res,next) => {
       console.log("Apllication-level midddlewere 2")
       next()
})
app.use("/",indexRouter)
app.use('/customer',customerRouter)

app.listen(port,()=> {
       console.log(`Example app listen on port ${port}`)
})