const express = require("express")
const router = express.Router()
const auth =require('./auth')
const user=require('./users.routes')


router.use("/",auth)
router.use('/user',user)


module.exports = router
