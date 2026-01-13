import express from "express";
const router = express.Router()

router.use('/editprofile',(req,res,next) => {
       var age = 19 
       if (age >= 18) {
              console.log("Router-level middleware")
              next()
       }else {
              console.log("Not Valid")
       }
})

router.get('/',(req,res) => {
       res.render('CHome.html')
})
router.get('/changepassword',(req,res) => {
       res.render('ChangePassword.html')
})
router.get('/editprofile',(req,res) => {
       console.log("calling...")
       res.render('EditProfile.html')
})
export default router