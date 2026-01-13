import express from "express";
const router = express.Router()

router.get('/',(req,res) => {
       res.render('Home.html')
})
router.get('/contact',(req,res) => {
       res.render('Contact.html')
})
router.get('/login',(req,res) => {
       res.render('Login.html')
})
router.get('/register',(req,res) => {
       res.render('Register.html')
})

export default router