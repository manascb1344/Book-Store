require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/bookRoutes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router);

// Contains Routes

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_DB)
    .then(() => console.log("Connected to DB"))
    .then(() => {
      app.listen(5000);
    })
    .catch((e) => console.log(e));
}

connectDB();