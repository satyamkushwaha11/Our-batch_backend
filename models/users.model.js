const { model, Schema } = require("mongoose");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: false,
    },
    lastName: {
      type: String,
      required: false,
    },
    userID: {
      type: String,
      required: false,
    },
    userName: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      default: "USER",
      enum:["USER","ADMIN",'DEVELOPER']
    },
    userStatus: {
      type: String,
      default: "ACTIVE",
      enum:["ACTIVE","INACTIVE",'DEACTIVE','SUSPENDED','DELETED']
    },
    phone: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports=model('Users',userSchema)
