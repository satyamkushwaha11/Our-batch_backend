const User = require('../models/users.model')
const Joi = require('joi')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()

// for login API

const login = async (req, res) => {
    const { email, password } = req.body
    const schema = Joi.object({
        email: Joi.string().email().required().trim(),
        password: Joi.string().required().trim()
    })

    var validSchema = schema.validate(req.body)  //VALIDATING REQ.BODY DATA

    if (validSchema.error) {
        return res.status(400).json({
            message: validSchema.error.message || "Bad Request",
            status: 400
        })
    }

    try {
        // FINDING USER ACCOUNT
        const user = await User.findOne({ email })
        console.log(user,'user');
        if (user) {
            const matchingPassword = await bcrypt.compare(password, user.password) //MATCHING THE PASSWORD
            if (matchingPassword) {
                const token = jwt.sign({ user }, process.env.SECRETE_KEY)       // CREATING JWT TOKEN
                return res.status(200).json({
                    massage:'login successfully',
                    ...user["_doc"],
                    token
                })
            }else{
                return res.status(401).json({
                    error:'email or password in not correct',
                })
            }
        }else{
            return res.status(404).json({
                error:'User does not exist with this email',
                
            })
        }

    } catch (error) {
        return res.status(500).json({
            massage:'Internal server error',
            error
            
        })
    }

}

// signup or Registeration API
const signup = async (req, res) => {
    console.log(req.body);
    const { name, email, password } = req.body
    console.log(req.body);
    const schema = Joi.object({
        // name: Joi.string().trim().required().min(3),
        firstName:Joi.string().allow(null,""),
        lastName:Joi.string().allow(null,""),
        phone:Joi.number().allow(null,""),
        email: Joi.string().email().required().trim(),
        password: Joi.string().required().trim().min(6).max(16),
        role: Joi.string().valid('ADMIN', 'USER').default('USER')
    })

    var validSchema = schema.validate(req.body)

    if (validSchema.error) {
        return res.status(400).json({
            message: validSchema.error.message || "Bad Request",
            status: 400
        })
    }

    let payload = validSchema.value

    try {
        // CHECKING USER EXISTIGN OR NOT
        
        const checkUser = await User.findOne({ email })
        

        if (checkUser) {
            return res.status(400).json({ error: [{ msg: 'Email is already exist.' }] })

        }
        //GENERATIG USER NAME
        const userName=payload.email.split('@')[0]
        payload={...payload,userName}
        // console.log(payload,'payload');


        // GENERATE HASH PASSWORD
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        try {
            // CREATING NEW USER
            console.log('ds');
            const createUser = await User.create({
                ...payload,
                password: hashPassword
            })
            console.log(createUser,process.env.SECRETE_KEY,'ooooooooooooo');
            // CREATING JWT TOKEN
            const token = jwt.sign({ user: createUser }, process.env.SECRETE_KEY)

            return res.status(200).json({
                massage: ' Your account has been created ',
                ...createUser["_doc"],
                token
            })

        } catch (error) {
            return res.status(500).json({
                massage:'Internal server error',
                error
                
            })        }

    } catch (error) {
        return res.status(500).json({
            massage:'Internal server error',
            error
            
        })    }




}

module.exports = {
    login,
    signup
}










