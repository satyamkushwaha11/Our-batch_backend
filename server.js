const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(cors());

const authRoutes = require("./routes/index");

const connect = require("./connection/db");
connect(); // function call to connect with database

app.use("/", authRoutes);



const PORT = process.env.PORT || 7001;
app.listen(PORT, () => {
  console.log(`Your app is running at Port ${PORT}`);
});
