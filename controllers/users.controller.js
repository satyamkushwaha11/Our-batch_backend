const User = require("../models/users.model");
const Joi = require("joi");
const userIdGenrator = require("../helper/userIdGenrator");

const getAllUser = async (req, res) => {
  userIdGenrator()
  try {
    const result = await User.find({});
    res.status(200).send({
      status: 200,
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      status: 200,
      msg: "internal server error",
    });
  }
};

const getUserByUserId = async (req, res) => {
  // const validateSchema = Joi.object({
  //   id: Joi.string().required,
  // });
  console.log(req.params,'pppppppppppppp')

  // let params = validateSchema.validate(req.params.userID);
  // // let params =req.params

  // if (params.error) {
  //   return res.status(400).json({
  //     message: params.error.message || "Bad Request",
  //     status: 400,
  //   });
  // } else {
  //   params = params.userID;
  // }
  try {
    let result = await User.find({ userID: req.params.id });
    if (result) {
      res.status(200).send({
        status: 200,
        data: result,
      });
    } else {
      res.status(400).send({
        status: 203,
        msg: "No user exist with this id",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 500,
      msg: "internal server error",
    });
  }
};

const updateUserByUserId = async (req, res) => {
  // const validateSchema = Joi.object({
  //   id: Joi.string().required,
  // });

  // let params = validateSchema.validate(req.params);
  // let params =req.params

  // if (params.error) {
  //   return res.status(400).json({
  //     message: params.error.message || "Bad Request",
  //     status: 400,
  //   });
  // } else {
  //   console.log(req.params,'kkkkkkkkkkk');
   
  // }
  try {
    const id =req.params.id
    console.log(req.body, ";;;;;;;;;;;;;;;;;;;",id);

    let result = await User.find({userID: id }, req.body,{new:true});
    console.log(result);
    if (result) {
      // let resp = await User.updateOne({ userID: id }, req.body,{new:true});
      res.status(200).send({
        status: 200,
        msg: "User Updated",
        data: result,
      });
    } else {
      res.status(400).send({
        status: 203,
        msg: "No user exist with this id",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 500,
      msg: "internal server error",
    });
  }
};

module.exports = {
  getAllUser,
  getUserByUserId,
  updateUserByUserId,
};
