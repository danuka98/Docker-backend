const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

//Set Cors
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

//Import Routes
const product = require("./routes/Product.Routes");

//Tharaka(import routes)
const empoyee = require('./routes/Employee.Routes');
const leaves = require('./routes/Leaves.Router');

//use Routes
app.use("/api/v1/product", product);

//tharaka(use routes)
app.use('/api/v1/employee',empoyee)
app.use('/api/v1/leaves',leaves)

module.exports = app;
