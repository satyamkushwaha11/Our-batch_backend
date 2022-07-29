const { model, Schema } = require("mongoose");
const mongoose =require("mongoose");

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
      type:String ,
      default:mongoose.Types.ObjectId(),
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
  { timestamps: true },
  { _id : false }
);

module.exports=model('Users',userSchema)
