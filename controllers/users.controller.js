const User = require("../models/users.model");
const Joi = require("joi");

const getAllUser = async (req, res) => {
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
  const validateSchema = Joi.object({
    id: Joi.string().required,
  });

  let query = validateSchema.validate(req.query);
  if (query.error) {
    return res.status(400).json({
      message: query.error.message || "Bad Request",
      status: 400,
    });
  } else {
    query = query.value;
  }
  try {
    let result = await User.findById(req.query);
    if (result) {
      res.status(200).send({
        status: 200,
        data: result,
      });

    } else {
        res.status(400).send({
            status: 203,
            msg:"No user exist with this id"
          });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 200,
      msg: "internal server error",
    });
  }
};

module.exports = {
  getAllUser,
  getUserByUserId 
};
