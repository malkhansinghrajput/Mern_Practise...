import express from 'express'
const router = express.Router()
/*
Routing refers to determining how an routerlication responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on). Each route can have one or more handler functions, which are executed when the route is matched.
*/
/*
Router-level middleware
*/

router.use("/editprofile",(req,res,next)=>{
    var age=12
    if (age>=18) {
        console.log("Router-level middleware")
        next()
    } else {
        console.log("Not Valid")
    }
})

router.get('/', (req, res) => {
    res.render('CHome.html')
})
router.get('/changepassword', (req, res) => {
    res.render('ChangePassword.html')
})
router.get('/editprofile', (req, res) => {
    console.log("calling...")
    res.render('EditProfile.html')
})


export default router