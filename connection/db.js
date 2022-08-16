const mongoose = require("mongoose");
require("dotenv").config();

const URL = "mongodb+srv://satyamkushwaha1:Satyam123@cluster0.lnplk.mongodb.net/ourBatch?retryWrites=true&w=majority" ;

const connect = async () => {
  try {
    const response = await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Connection Created");
  } catch (error) {
    console.log({ error });
  }
};

module.exports = connect;
