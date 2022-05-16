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

//use Routes
app.use("/api/v1/product", product);

module.exports = app;
