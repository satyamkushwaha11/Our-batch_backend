const express=require('express')
const { getAllUser,getUserByUserId ,updateUserByUserId} = require('../controllers/users.controller')
const routes=express.Router()


routes.get('/',getAllUser)
routes.get('/:id',getUserByUserId)
routes.put('/:id',updateUserByUserId)


module.exports=routes