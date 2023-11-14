const express = require("express");
const trainings = require("./routes/trainings");
const app = express();

require("dotenv").config(); // A .env fájlt olvassa
const port = process.env.PORT | 3333;

const morgan = require('morgan')
app.use(morgan('dev'))


// const logger = (req, res, next) => {
//   req.hello = "Hello World!";
//   console.log("Middleware ran.");
//   next();
// };
// app.use(logger);

app.use("/api/trainings", trainings);
app.listen(port, () => console.log(`Server running on port ${port}`));
