// sHOZ5aTim7XfVs5r

const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/bookRoutes");
const app = express();

// Middlewares
app.use(express.json());
app.use("/books", router);

// Contains Routes

mongoose
	.connect("mongodb+srv://zephop76593:sHOZ5aTim7XfVs5r@cluster0.o6ncuji.mongodb.net/?retryWrites=true&w=majority")
	.then(() => console.log("Connected to DB"))
	.then(() => {
		app.listen(5000);
	})
	.catch((e) => console.log(e));
