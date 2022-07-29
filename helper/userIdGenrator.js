const User=require('../models/users.model')

const userIdGenrator=async()=>{
    
    const result=await User.find({},'userId')
    console.log(result,'asdfasd');
}

module.exports=userIdGenrator