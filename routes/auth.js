const express = require("express")
const router = express.Router()
const userControllers = require("../controllers/auth.controller")


router.get('/', function(req, res, next) {  return res.status(200).json({   message:"ok" }) })
router.post("/signup", userControllers.signup)
router.post("/login", userControllers.login)
// router.post("/forget-password", userControllers.userForgetPassword)

module.exports = router
