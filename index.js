const express = require("express");
const errorHandler = require("./middleware/error")
require("dotenv").config(); // A .env fájlt olvassa

const trainings = require("./routes/trainings");
const app = express();

const port = process.env.PORT | 3333;

const morgan = require('morgan')
app.use(morgan('dev'))

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on("error", (error) => {
    console.log(error);
});
database.once("connected", () => {
    console.log(`Database Connected ${database.host}`);
});

app.use(express.json())

app.use("/api/trainings", trainings);
app.use(errorHandler)

app.listen(port, () => console.log(`Server running on port ${port}`));
