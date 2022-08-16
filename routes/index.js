const express = require("express")
const router = express.Router()

const auth =require('./auth')
const user=require('./users.routes')
const post=require('./posts.routes')



router.use("/",auth)
router.use('/user',user)
router.use('/post',post)


module.exports = router
