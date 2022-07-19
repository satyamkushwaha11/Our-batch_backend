const express=require('express')
const { getAllUser,getUserByUserId } = require('../controllers/users.controller')
const routes=express.Router()


routes.get('/',getAllUser)
routes.get('/:id',getUserByUserId)


module.exports=routes