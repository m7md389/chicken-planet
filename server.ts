import express from "express";
import * as mongoose from "mongoose";
import cors from "cors";
require('dotenv').config()

const app = express();
const path = require("path");
mongoose.connect(process.env.MONGODB_URI || "");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "node_modules")));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  next();
});

app.listen(process.env.PORT, function () {
  console.log("server is listening");
});
